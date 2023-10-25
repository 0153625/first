var wms_layers = [];

var format_LeuvMun_Trees_0 = new ol.format.GeoJSON();
var features_LeuvMun_Trees_0 = format_LeuvMun_Trees_0.readFeatures(json_LeuvMun_Trees_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LeuvMun_Trees_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeuvMun_Trees_0.addFeatures(features_LeuvMun_Trees_0);
var lyr_LeuvMun_Trees_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LeuvMun_Trees_0, 
                style: style_LeuvMun_Trees_0,
                interactive: false,
    title: 'LeuvMun_Trees<br />\
    <img src="styles/legend/LeuvMun_Trees_0_0.png" /> 0<br />\
    <img src="styles/legend/LeuvMun_Trees_0_1.png" /> 1 - 2<br />\
    <img src="styles/legend/LeuvMun_Trees_0_2.png" /> 3 - 4<br />\
    <img src="styles/legend/LeuvMun_Trees_0_3.png" /> 5 - 6<br />\
    <img src="styles/legend/LeuvMun_Trees_0_4.png" /> 7 +<br />'
        });
var format_LeuvMun_Trees_RawData_1 = new ol.format.GeoJSON();
var features_LeuvMun_Trees_RawData_1 = format_LeuvMun_Trees_RawData_1.readFeatures(json_LeuvMun_Trees_RawData_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LeuvMun_Trees_RawData_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeuvMun_Trees_RawData_1.addFeatures(features_LeuvMun_Trees_RawData_1);
var lyr_LeuvMun_Trees_RawData_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LeuvMun_Trees_RawData_1, 
                style: style_LeuvMun_Trees_RawData_1,
                interactive: true,
    title: 'LeuvMun_Trees_RawData<br />\
    <img src="styles/legend/LeuvMun_Trees_RawData_1_0.png" /> 0 <br />\
    <img src="styles/legend/LeuvMun_Trees_RawData_1_1.png" /> 1 - 2<br />\
    <img src="styles/legend/LeuvMun_Trees_RawData_1_2.png" /> 3 - 4<br />\
    <img src="styles/legend/LeuvMun_Trees_RawData_1_3.png" /> 5 - 6<br />\
    <img src="styles/legend/LeuvMun_Trees_RawData_1_4.png" /> 7 +<br />'
        });

lyr_LeuvMun_Trees_0.setVisible(true);lyr_LeuvMun_Trees_RawData_1.setVisible(true);
var layersList = [lyr_LeuvMun_Trees_0,lyr_LeuvMun_Trees_RawData_1];
lyr_LeuvMun_Trees_0.set('fieldAliases', {'SectorIDs': 'SectorIDs', 'T_SEC_NL': 'T_SEC_NL', 'T_NIS6_NL': 'T_NIS6_NL', 'T_MUN_NL': 'T_MUN_NL', 'T_ARR_NL': 'T_ARR_NL', 'PROV': 'PROV', 'REGION': 'REGION', 'M_AREA_HA': 'M_AREA_HA', 'M_PERI_M': 'M_PERI_M', 'CD_REFNIS': 'CD_REFNIS', 'POP': 'POP', 'DT_STRT_SE': 'DT_STRT_SE', 'PopDen_km2': 'PopDen_km2', 'type_code': 'type_code', 'type': 'type', 'NumSamples': 'NumSamples', 'AvgTrees': 'AvgTrees', 'zscore': 'zscore', });
lyr_LeuvMun_Trees_RawData_1.set('fieldAliases', {'study_id': 'study_id', 'SectorIDs': 'SectorIDs', 'pano_id': 'pano_id', 'PanoLat': 'PanoLat', 'PanoLon': 'PanoLon', 'Panodate': 'Panodate', 'Panoyear': 'Panoyear', 'TreeCount': 'TreeCount', });
lyr_LeuvMun_Trees_0.set('fieldImages', {'SectorIDs': 'TextEdit', 'T_SEC_NL': 'TextEdit', 'T_NIS6_NL': 'TextEdit', 'T_MUN_NL': 'TextEdit', 'T_ARR_NL': 'TextEdit', 'PROV': 'TextEdit', 'REGION': 'TextEdit', 'M_AREA_HA': 'TextEdit', 'M_PERI_M': 'TextEdit', 'CD_REFNIS': 'TextEdit', 'POP': 'TextEdit', 'DT_STRT_SE': 'DateTime', 'PopDen_km2': 'TextEdit', 'type_code': 'TextEdit', 'type': 'TextEdit', 'NumSamples': 'Range', 'AvgTrees': 'TextEdit', 'zscore': 'TextEdit', });
lyr_LeuvMun_Trees_RawData_1.set('fieldImages', {'study_id': 'TextEdit', 'SectorIDs': 'TextEdit', 'pano_id': 'TextEdit', 'PanoLat': 'TextEdit', 'PanoLon': 'TextEdit', 'Panodate': 'TextEdit', 'Panoyear': 'TextEdit', 'TreeCount': 'TextEdit', });
lyr_LeuvMun_Trees_0.set('fieldLabels', {'SectorIDs': 'no label', 'T_SEC_NL': 'no label', 'T_NIS6_NL': 'no label', 'T_MUN_NL': 'no label', 'T_ARR_NL': 'no label', 'PROV': 'no label', 'REGION': 'no label', 'M_AREA_HA': 'no label', 'M_PERI_M': 'no label', 'CD_REFNIS': 'no label', 'POP': 'no label', 'DT_STRT_SE': 'no label', 'PopDen_km2': 'no label', 'type_code': 'no label', 'type': 'no label', 'NumSamples': 'no label', 'AvgTrees': 'no label', 'zscore': 'no label', });
lyr_LeuvMun_Trees_RawData_1.set('fieldLabels', {'study_id': 'header label', 'SectorIDs': 'no label', 'pano_id': 'inline label', 'PanoLat': 'no label', 'PanoLon': 'no label', 'Panodate': 'no label', 'Panoyear': 'no label', 'TreeCount': 'inline label', });
lyr_LeuvMun_Trees_RawData_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});