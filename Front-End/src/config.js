export default {
	MAX_ATTACHMENT_SIZE: 5000000,
 s3: {
	REGION: "us-east-1",
	BUCKET: "queue-notes-app-uploads"
 },
 apiGateway: {
	REGION: "us-east-1",
	URL: "https://paoolzeaal.execute-api.us-east-1.amazonaws.com/prod"
 },
 cognito: {
	REGION: "us-east-1",
	USER_POOL_ID: "us-east-1_vQN6aP03P",
	APP_CLIENT_ID: "rmcs6o1en8bdi4jmnot4lahjb",
	IDENTITY_POOL_ID: "us-east-1:f8535af8-c006-45b0-8835-f472a9be7b9b"
 }
};