Test repository for https://github.com/claudiajs/claudia/issues/242


Clone and put AWS id and secret in .aws/credentials, and npm i.
Compile the typescript with `npm run build`; js should be in dist/.
Then run:

```
claudia generate-serverless-express-proxy --express-module dist/_server
<br>
claudia create --handler lambda.handler --deploy-proxy-api --region us-west-2
```
