import { useState, useRef, forwardRef, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const pages = [
  "https://i.postimg.cc/rpfz3sWP/Mozeli-TEXTO-page-0001.jpg",
  "https://i.postimg.cc/G299CRxh/Mozeli-TEXTO-page-0002.jpg",
  "https://i.postimg.cc/9Mzzh2YX/Mozeli-TEXTO-page-0003.jpg",
  "https://i.postimg.cc/XJXXbWkq/Mozeli-TEXTO-page-0004.jpg",
  "https://i.postimg.cc/Y9jjH7zG/Mozeli-TEXTO-page-0005.jpg",
  "https://i.postimg.cc/C1ddg0sC/Mozeli-TEXTO-page-0006.jpg",
  "https://i.postimg.cc/9Mzzh2YJ/Mozeli-TEXTO-page-0007.jpg",
  "https://i.postimg.cc/Jng07FpN/Mozeli-TEXTO-page-0008.jpg"
];

// Page component needs to be a forwardRef for react-pageflip
const PageCover = forwardRef<HTMLDivElement, { children: React.ReactNode }>((props, ref) => {
  return (
    <div className="bg-white" ref={ref}>
      {props.children}
    </div>
  );
});

PageCover.displayName = "PageCover";

const BookReader = () => {
  const navigate = useNavigate();
  const bookRef = useRef<any>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [zoom, setZoom] = useState(1);

  // Garantir que sempre inicie no topo da página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const nextPage = () => {
    bookRef.current?.pageFlip()?.flipNext();
    // Scroll para o topo quando mudar de página
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const prevPage = () => {
    bookRef.current?.pageFlip()?.flipPrev();
    // Scroll para o topo quando mudar de página
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.2, 2));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.2, 0.6));
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="container mx-auto">
        {/* Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 bg-card border border-border rounded-lg p-4">
          <Button
            variant="outline"
            onClick={() => navigate('/')}
            className="gap-2"
          >
            <Home className="w-4 h-4" />
            Voltar
          </Button>
          
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              Página {currentPage + 1} de {pages.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={handleZoomOut}
              disabled={zoom <= 0.6}
            >
              <ZoomOut className="w-4 h-4" />
            </Button>
            <span className="text-sm text-muted-foreground min-w-[60px] text-center">
              {Math.round(zoom * 100)}%
            </span>
            <Button
              variant="outline"
              size="icon"
              onClick={handleZoomIn}
              disabled={zoom >= 2}
            >
              <ZoomIn className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Book Container */}
        <div className="flex justify-center items-center overflow-auto">
          <div 
            className="relative transition-transform duration-300"
            style={{ transform: `scale(${zoom})` }}
          >
            <HTMLFlipBook
              width={400}
              height={600}
              size="stretch"
              minWidth={300}
              maxWidth={500}
              minHeight={400}
              maxHeight={800}
              showCover={true}
              flippingTime={800}
              className="shadow-2xl"
              ref={bookRef}
              onFlip={(e: any) => setCurrentPage(e.data)}
              drawShadow={true}
              useMouseEvents={true}
              startPage={0}
              usePortrait={true}
              startZIndex={0}
              autoSize={true}
              maxShadowOpacity={0.5}
              showPageCorners={true}
              disableFlipByClick={false}
              mobileScrollSupport={true}
              clickEventForward={true}
              swipeDistance={30}
              style={{}}
            >
              {pages.map((page, index) => (
                <PageCover key={index}>
                  <img
                    src={page}
                    alt={`Página ${index + 1}`}
                    className="w-full h-full object-contain"
                    draggable={false}
                  />
                </PageCover>
              ))}
            </HTMLFlipBook>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <Button
            onClick={prevPage}
            disabled={currentPage === 0}
            size="lg"
            className="gap-2 bg-primary hover:bg-primary/90"
          >
            <ChevronLeft className="w-5 h-5" />
            Anterior
          </Button>
          <Button
            onClick={nextPage}
            disabled={currentPage >= pages.length - 1}
            size="lg"
            className="gap-2 bg-primary hover:bg-primary/90"
          >
            Próxima
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookReader;
