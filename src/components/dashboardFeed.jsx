import React, { Component } from 'react';
import "../styles/DashboardStyles.css";
import DashCard from './dashCard';

export default class DashboardFeed extends Component {
    render() { 
        return (
            <div class="dashboard-feed">
                <div class="div1"><DashCard recipeID = ""/></div>
                <div class="div2"><DashCard recipeID = ""/></div>
                <div class="div3"><DashCard recipeID = ""/></div>
                <div class="div4"><DashCard recipeID = ""/></div>
                <div class="div5"><DashCard recipeID = ""/></div>
                <div class="div6"><DashCard recipeID = ""/></div>
                <div class="div7"><DashCard recipeID = ""/></div>
                <div class="div8"><DashCard recipeID = ""/></div>
                <div class="div9"><DashCard recipeID = ""/></div>
                <div class="div10"><DashCard recipeID = ""/></div>
                <div class="div11"><DashCard recipeID = ""/></div>
                <div class="div12"><DashCard recipeID = ""/></div>
            </div>
        );
    }
}
 