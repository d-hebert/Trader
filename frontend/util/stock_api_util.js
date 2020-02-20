export const getPrice = (symbol) => {
  return $.ajax({
    method: "GET",
    url: `https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=pk_c0dcd5318c2e4df6a96f5da1d5bac8ba`,
  });
};