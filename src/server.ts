import App from "./App";

const vPort = process.env.PORT ? Number(process.env.PORT) : 3030;

App.listen(vPort, () => {
  console.log('Server is Running on ' + vPort + ' port');
})
