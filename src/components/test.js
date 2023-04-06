// Dữ liệu
let data = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
    { id: 4, name: 'Product 4' },
    { id: 5, name: 'Product 5' },
    { id: 6, name: 'Product 6' },
    { id: 7, name: 'Product 7' },
    { id: 8, name: 'Product 8' },
    { id: 9, name: 'Product 9' },
    { id: 10, name: 'Product 10' },
    { id: 11, name: 'Product 11' },
    { id: 12, name: 'Product 12' }
  ];
  
  // Số sản phẩm hiển thị trên một trang
  let itemsPerPage = 3;
  
  // Tính tổng số trang
  let totalPages = Math.ceil(data.length / itemsPerPage);
  
  // Hiển thị sản phẩm cho trang đầu tiên
  showPage(1);
  
  // Hàm hiển thị sản phẩm cho một trang
  function showPage(page) {
    let start = (page - 1) * itemsPerPage;
    let end = start + itemsPerPage;
    let pageData = data.slice(start, end);
  
    // Hiển thị dữ liệu
    let result = '';
    pageData.forEach(item => {
      result += <div>${item.id} - ${item.name}</div>;
    });
    document.getElementById('products').innerHTML = result;
  
    // Hiển thị phân trang
    let pagination = '';
    for (let i = 1; i <= totalPages; i++) {
      if (i === page) {
        pagination += <span>${i}</span>;
      } else {
        pagination += <a href="#" onclick="showPage(${i})">${i}</a>;
      }
    }
    document.getElementById('pagination').innerHTML = pagination;
  }