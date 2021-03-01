async function something() {
  console.log('this might take some time....');
  // await delay(5000);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  console.log('done!');
}

something();
