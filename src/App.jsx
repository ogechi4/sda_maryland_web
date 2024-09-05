import React from 'react';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
// Other imports

function App() {
  return (
    <div className="flex flex-col min-h-screen">
     <Navbar/>
      <main className="flex-grow">
        {/* Other content/components */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
