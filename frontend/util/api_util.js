export const signup = user => {
  return $.ajax({
    method: "POST",
    url: "/api/users",
    data: { user },
    error: response => response
  });
};

export const login = user => {
  return $.ajax({
    method: "POST",
    url: "/api/session",
    data: { user },
    error: response => response
  });
};

export const logout = () => {
  return $.ajax({
    method: "DELETE",
    url: "/api/session"
  });
};

export const getTransactions = () => {
  return $.ajax({
    method: "GET",
    url: "/api/transactions"
  })
}

export const postTransaction = (transaction) => {
  return $.ajax({
    method: "POST",
    url: "/api/transactions",
    data: { transaction },
  })
}

export const getPortfolio = () => {
  return $.ajax({
    method: "GET",
    url: `/api/portfolio`,
  })
}

export const refreshCurrentUser = () => {
  return $.ajax({
    method: "GET",
    url: "/api/user",
  });
}