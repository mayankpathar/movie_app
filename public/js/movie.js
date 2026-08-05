  document.querySelectorAll('.tab-item').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      document.querySelectorAll('.tab-item').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
    });
  });