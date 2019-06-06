const startFolderAnimation = () => {
    const animationContainer = document.querySelector('.container');
    const folderCover = document.querySelector('.folder');
    const sections = document.querySelectorAll('.section-1');

    // Dynamically establish how low the folder should be moved
    animationContainer.style.transform = `translateY(${calculateSectionsHeight(sections)})`;
    folderCover.style.animation = "open-folder 10s ease-out forwards 1s";

    
  }


//   dynamically calculate the height of elements and return this value as string with px
  const calculateSectionsHeight = (sections)=> {
    let heightPx = 0;
    sections.forEach((section)=> {
        heightPx += section.offsetHeight
    })

    return (heightPx + 'px')
  }
  
  
  startFolderAnimation()