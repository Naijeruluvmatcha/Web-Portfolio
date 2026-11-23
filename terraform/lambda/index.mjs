import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, UpdateCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export const handler = async () => {
  const result = await docClient.send(new UpdateCommand({
    TableName: process.env.TABLE_NAME,
    Key: { id: "visitor_count" },
    UpdateExpression: "SET #count = if_not_exists(#count, :start) + :inc",
    ExpressionAttributeNames: { "#count": "count" },
    ExpressionAttributeValues: { ":inc": 1, ":start": 0 },
    ReturnValues: "UPDATED_NEW",
  }));

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ count: result.Attributes.count }),
  };
};
