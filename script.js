        document.addEventListener('mousemove', (e) => {
            const pupil = document.querySelector('.pupil');
            const eye = document.querySelector('.eye');
            
            // Получаем координаты центра глаза
            const eyeRect = eye.getBoundingClientRect();
            const eyeX = eyeRect.left + eyeRect.width / 2;
            const eyeY = eyeRect.top + eyeRect.height / 2;
            
            // Вычисляем угол между глазом и курсором
            const angle = Math.atan2(e.clientY - eyeY, e.clientX - eyeX);
            
            // Ограничиваем расстояние движения зрачка
            const maxDistance = 30;
            const distance = Math.min(maxDistance, 
                Math.sqrt(Math.pow(e.clientX - eyeX, 2) + Math.pow(e.clientY - eyeY, 2)) / 5);
            
            // Перемещаем зрачок
            const pupilX = Math.cos(angle) * distance;
            const pupilY = Math.sin(angle) * distance;
            
            pupil.style.transform = `translate(calc(-50% + ${pupilX}px), calc(-50% + ${pupilY}px))`;
        });