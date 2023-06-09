import { lazy, Suspense } from 'react'
import { Routes as BrowserRoutes, Route } from 'react-router-dom';

const Landing = lazy(async () => await import('../../pages/landing/Landing'))
const RSVPForm = lazy(async () => await import('../../pages/rsvp-form/RSVPForm'))
const Directions = lazy(async () => await import('../../pages/directions/Directions'))
// const WeddingTeam = lazy(async () => await import('../../pages/wedding-team/WeddingTeam'))
const Intinerary = lazy(async () => await import('../../pages/itinerary/Itinerary'))
const ImageGallery = lazy(async () => await import('../../pages/image-gallery/ImageGallery'))
const PageNotFound = lazy(async () => await import('../../pages/error/PageNotFound'))

export const Routes = () => {

  return (
    <>
    <Suspense fallback={<div className="container">Loading...</div>}>
      <BrowserRoutes>
        <Route path="/" element={<Landing />} />
        {/* <Route path="/wedding-team" element={<WeddingTeam />} /> */}
        <Route path="/rsvp" element={<RSVPForm />} />
        <Route path="/directions" element={<Directions />} />
        <Route path="/rsvp" element={<Intinerary />} />
        <Route path="/gallery" element={<ImageGallery />} />
        <Route path="*" element={<PageNotFound />} />
      </BrowserRoutes>
    </Suspense>
    </>
  );
};