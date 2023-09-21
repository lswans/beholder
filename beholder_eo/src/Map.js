import React, {useRef, useEffect, useState} from 'react';
import {loadModules} from 'esri-loader';
import "./style.css";
import Button from '@mui/material/Button';
import { clear } from '@testing-library/user-event/dist/clear';


function Map(){
    const [coordiantes, setCoordinates] = useState([-122.05266, 47.58323])
    const MapEl=useRef(null);
    let graphicsLayer;

    useEffect(
        ()=>{
            let view;
        
        loadModules(["esri/views/MapView", "esri/WebMap", "esri/layers/FeatureLayer", "esri/Graphic",
        "esri/layers/GraphicsLayer", "esri/widgets/Search"], {
            css:true
        }).then(([MapView, WebMap, FeatureLayer, Graphic, GraphicsLayer, Search, dom, SimpleMarkerSymbol, SimpleLineSymbol])=>{
            const webmap = new WebMap({
                basemap: "satellite"
            })

            view= new MapView({
                map:webmap,
                center:coordiantes,
                zoom:11,
                //use the ref as a container
                container:MapEl.current
            })

            const point = { //Create a point
                type: "point",
                longitude: -122.05266,
                latitude: 47.58323
             };
            graphicsLayer = new GraphicsLayer();
            view.map.add(graphicsLayer);

            const search = new Search({  //Add Search widget
                view: view
              });
            
            const simpleMarkerSymbol = {
                type: "simple-marker",
                color: [226, 119, 40],  // Orange
                outline: {
                    color: [255, 255, 255], // White
                    width: 1
                }
             };
            
            const pointGraphic = new Graphic({
                geometry: point,
                symbol: simpleMarkerSymbol
            });
            graphicsLayer.add(pointGraphic);

            //onClick functions
            view.on("click", getCoordsOnClick);            
            function getCoordsOnClick(evt) {
                graphicsLayer.add(new Graphic(evt.mapPoint, simpleMarkerSymbol));
                
              }

            view.ui.add(search, "top-right"); //Add to the map
            
              /*const parksLayer = new FeatureLayer({
                url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Parks_and_Open_Space/FeatureServer/0"
            });
            view.map.add(parksLayer, 0);
            */

        })  
        
        
        return()=>{
            if(!!view){
                view.destroy();
                view=null;
            }
        }
    })

    return(
            <div >
                <h1 style={{alignSelf:"center"}}>BeholderEO</h1>
                <h2 style={{alignSelf:"center"}}>Asset Relationship Oversight</h2>
                <Button onClick={()=> graphicsLayer.removeAll()}>Clear</Button>
                <div style={{height:400, width:600, paddingInline: 300}} ref={MapEl}>
                    <div id="map" >
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Map;