// Hàm getAll trả về một Promise và giả mạo việc lấy dữ liệu từ API với setTimeout
const getAll = () => {
  return new Promise((resolve) => {
    // Đặt timeout để giả mạo thời gian lấy dữ liệu từ API (500 milliseconds)
    setTimeout(() => {
      // Sử dụng fetch để tải dữ liệu từ fake-data.json
      fetch('./api/fake-data.json')
        .then((response) => response.json())
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          resolve([]); // Trả về một mảng trống trong trường hợp có lỗi
        });
    }, 500);
  });
};

// Xuất hàm getAll để sử dụng trong các module khác
export default {
  getAll,
};
