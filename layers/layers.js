var wms_layers = [];

var format_Padangadm_0 = new ol.format.GeoJSON();
var features_Padangadm_0 = format_Padangadm_0.readFeatures(json_Padangadm_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Padangadm_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Padangadm_0.addFeatures(features_Padangadm_0);
var lyr_Padangadm_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Padangadm_0, 
                style: style_Padangadm_0,
                popuplayertitle: "Padang adm",
                interactive: true,
                title: '<img src="styles/legend/Padangadm_0.png" /> Padang adm'
            });
var format_sig_18_1 = new ol.format.GeoJSON();
var features_sig_18_1 = format_sig_18_1.readFeatures(json_sig_18_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sig_18_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sig_18_1.addFeatures(features_sig_18_1);
var lyr_sig_18_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sig_18_1, 
                style: style_sig_18_1,
                popuplayertitle: "sig_18",
                interactive: true,
                title: '<img src="styles/legend/sig_18_1.png" /> sig_18'
            });
var format_Count_2 = new ol.format.GeoJSON();
var features_Count_2 = format_Count_2.readFeatures(json_Count_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Count_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Count_2.addFeatures(features_Count_2);
var lyr_Count_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Count_2, 
                style: style_Count_2,
                popuplayertitle: "Count",
                interactive: true,
                title: '<img src="styles/legend/Count_2.png" /> Count'
            });

lyr_Padangadm_0.setVisible(true);lyr_sig_18_1.setVisible(true);lyr_Count_2.setVisible(true);
var layersList = [lyr_Padangadm_0,lyr_sig_18_1,lyr_Count_2];
lyr_Padangadm_0.set('fieldAliases', {'Id': 'Id', 'kecamatan': 'kecamatan', });
lyr_sig_18_1.set('fieldAliases', {'no': 'no', 'titik': 'titik', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_Count_2.set('fieldAliases', {'Id': 'Id', 'kecamatan': 'kecamatan', 'NUMPOINTS': 'NUMPOINTS', });
lyr_Padangadm_0.set('fieldImages', {'Id': 'Range', 'kecamatan': 'TextEdit', });
lyr_sig_18_1.set('fieldImages', {'no': 'Range', 'titik': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_Count_2.set('fieldImages', {'Id': '', 'kecamatan': '', 'NUMPOINTS': '', });
lyr_Padangadm_0.set('fieldLabels', {'Id': 'no label', 'kecamatan': 'no label', });
lyr_sig_18_1.set('fieldLabels', {'no': 'inline label - always visible', 'titik': 'inline label - always visible', 'latitude': 'inline label - always visible', 'longitude': 'inline label - always visible', });
lyr_Count_2.set('fieldLabels', {'Id': 'no label', 'kecamatan': 'inline label - always visible', 'NUMPOINTS': 'no label', });
lyr_Count_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});