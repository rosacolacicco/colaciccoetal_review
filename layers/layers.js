ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-20037508.342789, -20037508.342789, 20037508.342789, 20037508.342789]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_KGClimateClassification_1 = new ol.layer.Image({
                            opacity: 1,
                            title: 'KG Climate Classification',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/KGClimateClassification_1.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-20037508.342789, -44927335.427097, 20037508.342789, 44927335.427096]
                            })
                        });
var format_Studiedareas_2 = new ol.format.GeoJSON();
var features_Studiedareas_2 = format_Studiedareas_2.readFeatures(json_Studiedareas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Studiedareas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Studiedareas_2.addFeatures(features_Studiedareas_2);
var lyr_Studiedareas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Studiedareas_2, 
                style: style_Studiedareas_2,
                popuplayertitle: 'Studied areas',
                interactive: true,
                title: '<img src="styles/legend/Studiedareas_2.png" /> Studied areas'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_KGClimateClassification_1.setVisible(true);lyr_Studiedareas_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_KGClimateClassification_1,lyr_Studiedareas_2];
lyr_Studiedareas_2.set('fieldAliases', {'id': 'id', 'Paper': 'Paper', 'Title': 'Title', });
lyr_Studiedareas_2.set('fieldImages', {'id': 'TextEdit', 'Paper': 'TextEdit', 'Title': 'TextEdit', });
lyr_Studiedareas_2.set('fieldLabels', {'id': 'header label - visible with data', 'Paper': 'header label - visible with data', 'Title': 'header label - visible with data', });
lyr_Studiedareas_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});