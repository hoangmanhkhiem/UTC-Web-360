document.addEventListener('DOMContentLoaded', function() {
    const viewer = new View360.View360({
      container: document.getElementById('viewer'),
      projection: new View360.CylindricalProjection({
        src: 'anh1.jpg',
        partial: true, // Chỉ định đây là ảnh panorama không phải toàn bộ 360 độ
        repeatX: false // Không lặp lại ảnh theo chiều ngang
      }),
      yaw: {
        range: [-180, 180] // Giới hạn góc quay ngang
      },
      pitch: {
        range: [-10, 10], // Giới hạn góc nghiêng lên/xuống (nhỏ hơn vì là ảnh cylindrical)
        initial: 0 // Góc nhìn ban đầu
      },
      zoom: {
        range: [1, 3], // Giới hạn zoom
        initial: 1 // Zoom ban đầu
      },
      autoResize: true,
      autoplay: true, // Tự động xoay
      autoplaySpeed: 0.5
    });
    
    // Tạo nút điều khiển
    const controlPanel = document.createElement('div');
    controlPanel.style.position = 'absolute';
    controlPanel.style.bottom = '20px';
    controlPanel.style.left = '50%';
    controlPanel.style.transform = 'translateX(-50%)';
    controlPanel.style.display = 'flex';
    controlPanel.style.gap = '10px';
    controlPanel.style.zIndex = '100';
    
    // Nút dừng/phát
    const playButton = document.createElement('button');
    playButton.textContent = 'Dừng xoay';
    playButton.style.padding = '8px 16px';
    playButton.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    playButton.style.color = 'white';
    playButton.style.border = '1px solid rgba(255, 255, 255, 0.3)';
    playButton.style.borderRadius = '4px';
    playButton.style.cursor = 'pointer';
    
    let isAutoRotating = true;
    playButton.addEventListener('click', function() {
      isAutoRotating = !isAutoRotating;
      if (isAutoRotating) {
        viewer.startAutoplay();
        playButton.textContent = 'Dừng xoay';
      } else {
        viewer.stopAutoplay();
        playButton.textContent = 'Bắt đầu xoay';
      }
    });
    
    controlPanel.appendChild(playButton);
    document.body.appendChild(controlPanel);
  });
  