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

json passed as request body will also be returned

```
fetch({
    url: `${MOCK_SERVER}`,
    options: {
      method: "POST",
      body: JSON.stringify(mocks),
      headers: {
        "Content-Type": "application/json",
      },
    },
  });
};
```
predefined json can be returned when passed as a path. for example:

`localhost:4041/<extension>/<filename>` will return file located in the `./mockData` directory for example `localhost:4041/json/test` will return `./mockData/test.json`
