// utils/pagination.js

/**
 * Handles pagination of data.
 * @param {Array} data - The data to be paginated.
 * @param {number} page - The current page number.
 * @param {number} limit - The number of items to display per page.
 * @returns {Object} - An object containing the paginated data and pagination info.
 */
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
  
  /**
   * Sorts data based on specific criteria.
   * @param {Array} data - The data to be sorted.
   * @param {string} sortBy - The field to sort by.
   * @param {string} sortOrder - The sort order ('asc' for ascending, 'desc' for descending).
   * @returns {Array} - The sorted data.
   */
  function sortData(data, sortBy, sortOrder) {
    if (sortOrder === 'asc') {
      return data.sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));
    } else if (sortOrder === 'desc') {
      return data.sort((a, b) => (a[sortBy] > b[sortBy] ? -1 : 1));
    } else {
      return data; // No sorting if sortOrder is not 'asc' or 'desc'
    }
  }
  
  module.exports = {
    paginateResults,
    sortData,
  };
  