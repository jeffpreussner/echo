# Echo


## Install

```
npm install

```


## Run

```
node index.js

```

## Run on remote server

To run on remote and ensure script runs continiuosly we use the [`forever`](https://www.npmjs.com/package/forever) package

```
forever index.js

```

## Usage example

Echo will return json sent to useful for mock apis for form actions search endpoints and other RESTful services.
Echo will return json resonse provided for bothe GET and POST requests.

```
import { dataSuccess, dataSuccessExternal, dataError } from "./mockData.js";

const mockServerUrl = (json) => {
  return `${MOCK_SERVER}/?json=${JSON.stringify(json)}`;
};

render(
<form action={mockServerUrl(dataSuccess)}>
...
</form>
)

```