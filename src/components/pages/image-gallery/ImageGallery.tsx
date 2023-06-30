import { useState, useRef } from 'react';
import Card from '../../common/Cards/Card';
import Image from '../../common/Image/Image';
import { TRAD_IMAGES } from '../../../store/consts/consts';
import styled from '@emotion/styled';

const CardGrid = styled.div`
  margin: 5% auto;
`;

const SlideshowContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 15vw;
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 84px;
  cursor: pointer;
`;

const PreviousButton = styled(NavigationButton)`
  left: 10px;
`;

const NextButton = styled(NavigationButton)`
  right: 10px;
`;

const ImageGallery = () => {
  const itemsPerPage = 3; // Number of TRAD_IMAGES items to show per page
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(TRAD_IMAGES.length / itemsPerPage);
  const containerRef = useRef<HTMLDivElement>(null);
  const [startX, setStartX] = useState(0);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const distance = e.changedTouches[0].clientX - startX;
    const threshold = window.innerWidth / 5; // Minimum swipe distance to trigger navigation

    if (distance > threshold) {
      handlePrevPage();
    } else if (distance < -threshold) {
      handleNextPage();
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <>
      <CardGrid ref={containerRef} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
        {totalPages > 1 && (
          <PreviousButton onClick={handlePrevPage} disabled={currentPage === 1}>
            &#8249;
          </PreviousButton>
        )}
        <SlideshowContainer>
          {TRAD_IMAGES.slice(startIndex, endIndex).map((imageName, index) => (
            <Card key={index} padding="0.5em" margin="0.5em">
              <Image src={require('../../../assets/gallery/' + imageName)} alt={imageName} />
            </Card>
          ))}
        </SlideshowContainer>
        {totalPages > 1 && (
          <NextButton onClick={handleNextPage} disabled={currentPage === totalPages}>
            &#8250;
          </NextButton>
        )}
      </CardGrid>
    </>
  );
};

export default ImageGallery;