async function retryRequest(request, limit = 3, currentNum = 1) {
  try {
    const result = await request();
    if(result) {
        return result;
    }
    if (result.error && currentNum < limit) {
      return retryRequest(request, limit, currentNum + 1);
    }
  } catch (error) {
    if (currentNum < limit) {
      return retryRequest(request, limit, currentNum + 1);
    } else {
      return error
    }
  }
}
