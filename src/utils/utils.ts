const futureDate = (days: number) => {
  var todayDate = new Date();
  var myFutureDate = new Date(todayDate);
  myFutureDate.setDate(myFutureDate.getDate() + days);
  return dateToYYMMDD(myFutureDate);
};

const dateToYYMMDD = (date: any) => {
  var dd = String(date.getDate()).padStart(2, "0");
  var mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = date.getFullYear();

  return yyyy + "-" + mm + "-" + dd;
};

const generateRandomValue = () => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < 10; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};

export { futureDate, dateToYYMMDD, generateRandomValue };
