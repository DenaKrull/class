import './App.css';
import React, { Component } from 'react';
import RecipeDetails from './RecipeDetails';
import ListComponent from './ListComponent';
import ClickCounter from './ClickCounter';
import RecipeList from './RecipeList';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Header from './Header';

class App extends Component {
 


  // async componentDidMount() {
  //   try{
  //     const response = await fetch('./data/recipes.json');
  //     if(!response.ok){
  //       throw new Error(`${response.status} ${response.statusText}`);
  //     }
  //     const recipes = await response.json();
  //     this.setState({recipes});
  //   }catch{
  //     console.log('error');
  //   }
  // }



  render() {
   
    return (
      <div className="container-fluid">
        <div className="text-center">
          <Header />
          <Routes>
            <Route index element={<RecipeList />} />
            <Route path="/recipe/:id" element={<RecipeDetails  />} />
            <Route path='*' element={<Navigate to='/' replace="true" />} />
          </Routes>
          <Outlet />

          <hr />
          <ClickCounter />
        </div>
      </div>
    );
  }
}


export default App;
