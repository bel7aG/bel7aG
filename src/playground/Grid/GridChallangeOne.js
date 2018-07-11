import React from 'react';

const GridChallangeOne = () => (
  <section className="grid-challange1">
    <h1 style={{
      textAlign: 'center',
      marginBottom: 40
    }}>Grid Challange 1</h1>
    <div className="layout">
      <header className="item item-1">Header</header>
      <div className="item item-2">SmallBox1</div>
      <div className="item item-3">SmallBox2</div>
      <div className="item item-4">SmallBox3</div>
      <div className="item item-5">Sidebar</div>
      <div className="item item-6">Main Content</div>
      <footer className="item item-7">Footer</footer>
    </div>
  </section>
);

export default GridChallangeOne;
