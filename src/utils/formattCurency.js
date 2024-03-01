const formattCurency = (value) => {
  const formatt = value.toLocaleString("pt-BR", {
    style: "currency",
    currency:"BRL"
  })
  return formatt
}

export { formattCurency }
