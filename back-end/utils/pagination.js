function paginateResults(data, page, limit) {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
  
    const paginatedData = data.slice(startIndex, endIndex);
  
    const totalPages = Math.ceil(data.length / limit);
  
    return {
      currentPage: page,
      totalPages,
      totalItems: data.length,
      paginatedData,
    };
  }
  
 
  function sortData(data, sortBy, sortOrder) {
    if (sortOrder === 'asc') {
      return data.sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));
    } else if (sortOrder === 'desc') {
      return data.sort((a, b) => (a[sortBy] > b[sortBy] ? -1 : 1));
    } else {
      return data; 
    }
  }
  
  module.exports = {
    paginateResults,
    sortData,
  };
  