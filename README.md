claudia generate-serverless-express-proxy --express-module dist/_server
<br>
claudia create --handler lambda.handler --deploy-proxy-api --region us-west-2
