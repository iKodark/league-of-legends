const verifyRequest = async (url: string) => {
  const response = await fetch(url)
  return response.status === 200
}

export default verifyRequest