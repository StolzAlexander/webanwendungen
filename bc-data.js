// Quelle:
// https://npgeo-corona-npgeo-de.hub.arcgis.com/datasets/917fc37a709542548cc3be077a786c17_0
// https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?where=1%3D1&outFields=EWZ,cases,deaths,cases_per_100k,BL,BL_ID,county,last_update,cases7_per_100k,OBJECTID&returnGeometry=false&outSR=4326&f=json

export const bcData = {
  objectIdFieldName: 'OBJECTID',
  uniqueIdField: { name: 'OBJECTID', isSystemMaintained: true },
  globalIdFieldName: '',
  geometryType: 'esriGeometryPolygon',
  spatialReference: { wkid: 4326, latestWkid: 4326 },
  fields: [
    {
      name: 'EWZ',
      type: 'esriFieldTypeInteger',
      alias: 'Einwohnerzahl',
      sqlType: 'sqlTypeOther',
      domain: null,
      defaultValue: null
    },
    {
      name: 'cases',
      type: 'esriFieldTypeInteger',
      alias: 'Fälle',
      sqlType: 'sqlTypeOther',
      domain: null,
      defaultValue: null
    },
    {
      name: 'deaths',
      type: 'esriFieldTypeInteger',
      alias: 'Todesfälle',
      sqlType: 'sqlTypeOther',
      domain: null,
      defaultValue: null
    },
    {
      name: 'cases_per_100k',
      type: 'esriFieldTypeDouble',
      alias: 'Fälle/100.000 EW',
      sqlType: 'sqlTypeOther',
      domain: null,
      defaultValue: null
    },
    {
      name: 'BL',
      type: 'esriFieldTypeString',
      alias: 'Bundesland',
      sqlType: 'sqlTypeOther',
      length: 256,
      domain: null,
      defaultValue: null
    },
    {
      name: 'BL_ID',
      type: 'esriFieldTypeString',
      alias: 'Bundesland ID',
      sqlType: 'sqlTypeOther',
      length: 256,
      domain: null,
      defaultValue: null
    },
    {
      name: 'county',
      type: 'esriFieldTypeString',
      alias: 'Landkreis',
      sqlType: 'sqlTypeOther',
      length: 256,
      domain: null,
      defaultValue: null
    },
    {
      name: 'last_update',
      type: 'esriFieldTypeString',
      alias: 'Aktualisierung',
      sqlType: 'sqlTypeOther',
      length: 256,
      domain: null,
      defaultValue: null
    },
    {
      name: 'cases7_per_100k',
      type: 'esriFieldTypeDouble',
      alias: 'Fälle letzte 7 Tage/100.000 EW',
      sqlType: 'sqlTypeOther',
      domain: null,
      defaultValue: null
    },
    {
      name: 'OBJECTID',
      type: 'esriFieldTypeOID',
      alias: 'OBJECTID',
      sqlType: 'sqlTypeOther',
      domain: null,
      defaultValue: null
    }
  ],
  features: [
    {
      attributes: {
        EWZ: 89934,
        cases: 22945,
        deaths: 69,
        cases_per_100k: 25513.1540907777,
        BL: 'Schleswig-Holstein',
        BL_ID: '1',
        county: 'SK Flensburg',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1068.56138946338,
        OBJECTID: 1
      }
    },
    {
      attributes: {
        EWZ: 246601,
        cases: 53918,
        deaths: 206,
        cases_per_100k: 21864.4693249419,
        BL: 'Schleswig-Holstein',
        BL_ID: '1',
        county: 'SK Kiel',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1017.02750597118,
        OBJECTID: 2
      }
    },
    {
      attributes: {
        EWZ: 215846,
        cases: 48923,
        deaths: 132,
        cases_per_100k: 22665.6968394133,
        BL: 'Schleswig-Holstein',
        BL_ID: '1',
        county: 'SK Lübeck',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1267.57039741297,
        OBJECTID: 3
      }
    },
    {
      attributes: {
        EWZ: 79905,
        cases: 18026,
        deaths: 79,
        cases_per_100k: 22559.2891558726,
        BL: 'Schleswig-Holstein',
        BL_ID: '1',
        county: 'SK Neumünster',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 779.675865089794,
        OBJECTID: 4
      }
    },
    {
      attributes: {
        EWZ: 133251,
        cases: 29422,
        deaths: 96,
        cases_per_100k: 22080.1344830433,
        BL: 'Schleswig-Holstein',
        BL_ID: '1',
        county: 'LK Dithmarschen',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1304.3054085898,
        OBJECTID: 5
      }
    },
    {
      attributes: {
        EWZ: 199152,
        cases: 42086,
        deaths: 149,
        cases_per_100k: 21132.6022334699,
        BL: 'Schleswig-Holstein',
        BL_ID: '1',
        county: 'LK Herzogtum Lauenburg',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 636.699606330843,
        OBJECTID: 6
      }
    },
    {
      attributes: {
        EWZ: 167147,
        cases: 37856,
        deaths: 131,
        cases_per_100k: 22648.3275200871,
        BL: 'Schleswig-Holstein',
        BL_ID: '1',
        county: 'LK Nordfriesland',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1221.67912077393,
        OBJECTID: 7
      }
    },
    {
      attributes: {
        EWZ: 201487,
        cases: 34906,
        deaths: 114,
        cases_per_100k: 17324.194613052,
        BL: 'Schleswig-Holstein',
        BL_ID: '1',
        county: 'LK Ostholstein',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1289.41321276311,
        OBJECTID: 8
      }
    },
    {
      attributes: {
        EWZ: 317085,
        cases: 69298,
        deaths: 463,
        cases_per_100k: 21854.7077282117,
        BL: 'Schleswig-Holstein',
        BL_ID: '1',
        county: 'LK Pinneberg',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 803.885393506473,
        OBJECTID: 9
      }
    },
    {
      attributes: {
        EWZ: 129353,
        cases: 21866,
        deaths: 51,
        cases_per_100k: 16904.1305574668,
        BL: 'Schleswig-Holstein',
        BL_ID: '1',
        county: 'LK Plön',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1244.6560961091,
        OBJECTID: 10
      }
    },
    {
      attributes: {
        EWZ: 274765,
        cases: 55587,
        deaths: 97,
        cases_per_100k: 20230.742634615,
        BL: 'Schleswig-Holstein',
        BL_ID: '1',
        county: 'LK Rendsburg-Eckernförde',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1171.54659436246,
        OBJECTID: 11
      }
    },
    {
      attributes: {
        EWZ: 202647,
        cases: 41462,
        deaths: 112,
        cases_per_100k: 20460.2091321362,
        BL: 'Schleswig-Holstein',
        BL_ID: '1',
        county: 'LK Schleswig-Flensburg',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1073.29494144991,
        OBJECTID: 12
      }
    },
    {
      attributes: {
        EWZ: 278007,
        cases: 60979,
        deaths: 267,
        cases_per_100k: 21934.3397828112,
        BL: 'Schleswig-Holstein',
        BL_ID: '1',
        county: 'LK Segeberg',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 661.853838212707,
        OBJECTID: 13
      }
    },
    {
      attributes: {
        EWZ: 130706,
        cases: 21100,
        deaths: 64,
        cases_per_100k: 16143.0997811883,
        BL: 'Schleswig-Holstein',
        BL_ID: '1',
        county: 'LK Steinburg',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 630.422474867259,
        OBJECTID: 14
      }
    },
    {
      attributes: {
        EWZ: 244989,
        cases: 51744,
        deaths: 365,
        cases_per_100k: 21120.9482874741,
        BL: 'Schleswig-Holstein',
        BL_ID: '1',
        county: 'LK Stormarn',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 763.299576715689,
        OBJECTID: 15
      }
    },
    {
      attributes: {
        EWZ: 1852478,
        cases: 512541,
        deaths: 2489,
        cases_per_100k: 27667.858943534,
        BL: 'Hamburg',
        BL_ID: '2',
        county: 'SK Hamburg',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 677.902787509487,
        OBJECTID: 16
      }
    },
    {
      attributes: {
        EWZ: 248561,
        cases: 58338,
        deaths: 267,
        cases_per_100k: 23470.2950181243,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'SK Braunschweig',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 952.281331343211,
        OBJECTID: 17
      }
    },
    {
      attributes: {
        EWZ: 103866,
        cases: 31968,
        deaths: 160,
        cases_per_100k: 30778.1179596788,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'SK Salzgitter',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 767.334835268519,
        OBJECTID: 18
      }
    },
    {
      attributes: {
        EWZ: 123840,
        cases: 34299,
        deaths: 178,
        cases_per_100k: 27696.2209302326,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'SK Wolfsburg',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 448.966408268734,
        OBJECTID: 19
      }
    },
    {
      attributes: {
        EWZ: 177227,
        cases: 46040,
        deaths: 294,
        cases_per_100k: 25977.9830387018,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Gifhorn',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 901.104233553578,
        OBJECTID: 20
      }
    },
    {
      attributes: {
        EWZ: 134688,
        cases: 29865,
        deaths: 184,
        cases_per_100k: 22173.4675694939,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Goslar',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 763.245426467094,
        OBJECTID: 21
      }
    },
    {
      attributes: {
        EWZ: 91518,
        cases: 22602,
        deaths: 135,
        cases_per_100k: 24696.7809611224,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Helmstedt',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 679.647719574291,
        OBJECTID: 22
      }
    },
    {
      attributes: {
        EWZ: 131772,
        cases: 30635,
        deaths: 129,
        cases_per_100k: 23248.4898157423,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Northeim',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 993.382509182527,
        OBJECTID: 23
      }
    },
    {
      attributes: {
        EWZ: 135844,
        cases: 36756,
        deaths: 144,
        cases_per_100k: 27057.5071405436,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Peine',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1032.80233208681,
        OBJECTID: 24
      }
    },
    {
      attributes: {
        EWZ: 119361,
        cases: 27592,
        deaths: 122,
        cases_per_100k: 23116.4283141059,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Wolfenbüttel',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 903.980362094822,
        OBJECTID: 25
      }
    },
    {
      attributes: {
        EWZ: 323900,
        cases: 64041,
        deaths: 371,
        cases_per_100k: 19771.8431614696,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Göttingen',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 729.237418956468,
        OBJECTID: 26
      }
    },
    {
      attributes: {
        EWZ: 1155330,
        cases: 309840,
        deaths: 1513,
        cases_per_100k: 26818.3116512165,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'Region Hannover',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 624.064120208079,
        OBJECTID: 27
      }
    },
    {
      attributes: {
        EWZ: 218072,
        cases: 53467,
        deaths: 133,
        cases_per_100k: 24518.049084706,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Diepholz',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1144.11753916138,
        OBJECTID: 28
      }
    },
    {
      attributes: {
        EWZ: 148580,
        cases: 36803,
        deaths: 121,
        cases_per_100k: 24769.820971867,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Hameln-Pyrmont',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 893.121550679768,
        OBJECTID: 29
      }
    },
    {
      attributes: {
        EWZ: 275464,
        cases: 67434,
        deaths: 411,
        cases_per_100k: 24480.1498562426,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Hildesheim',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 924.984752998577,
        OBJECTID: 30
      }
    },
    {
      attributes: {
        EWZ: 70207,
        cases: 16271,
        deaths: 123,
        cases_per_100k: 23175.7517056704,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Holzminden',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 947.198997250986,
        OBJECTID: 31
      }
    },
    {
      attributes: {
        EWZ: 121645,
        cases: 29326,
        deaths: 183,
        cases_per_100k: 24107.8548234617,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Nienburg (Weser)',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1128.69415101319,
        OBJECTID: 32
      }
    },
    {
      attributes: {
        EWZ: 158406,
        cases: 39118,
        deaths: 169,
        cases_per_100k: 24694.7716626895,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Schaumburg',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 876.229435753696,
        OBJECTID: 33
      }
    },
    {
      attributes: {
        EWZ: 179386,
        cases: 43308,
        deaths: 139,
        cases_per_100k: 24142.3522459947,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Celle',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 768.733345969028,
        OBJECTID: 34
      }
    },
    {
      attributes: {
        EWZ: 198826,
        cases: 44844,
        deaths: 219,
        cases_per_100k: 22554.3942945088,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Cuxhaven',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 886.202005773893,
        OBJECTID: 35
      }
    },
    {
      attributes: {
        EWZ: 256016,
        cases: 58193,
        deaths: 186,
        cases_per_100k: 22730.2199862509,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Harburg',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 963.611649271921,
        OBJECTID: 36
      }
    },
    {
      attributes: {
        EWZ: 48503,
        cases: 10003,
        deaths: 32,
        cases_per_100k: 20623.4665896955,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Lüchow-Dannenberg',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1315.38255365647,
        OBJECTID: 37
      }
    },
    {
      attributes: {
        EWZ: 184235,
        cases: 41780,
        deaths: 102,
        cases_per_100k: 22677.5585529351,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Lüneburg',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 853.258067142508,
        OBJECTID: 38
      }
    },
    {
      attributes: {
        EWZ: 114640,
        cases: 24977,
        deaths: 80,
        cases_per_100k: 21787.3342637823,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Osterholz',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1204.6406140963,
        OBJECTID: 39
      }
    },
    {
      attributes: {
        EWZ: 164486,
        cases: 37202,
        deaths: 141,
        cases_per_100k: 22617.1224298725,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Rotenburg (Wümme)',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1027.44306506329,
        OBJECTID: 40
      }
    },
    {
      attributes: {
        EWZ: 140885,
        cases: 31050,
        deaths: 161,
        cases_per_100k: 22039.2518720943,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Heidekreis',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 633.850303438975,
        OBJECTID: 41
      }
    },
    {
      attributes: {
        EWZ: 205357,
        cases: 45182,
        deaths: 190,
        cases_per_100k: 22001.6848707373,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Stade',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1015.30505412526,
        OBJECTID: 42
      }
    },
    {
      attributes: {
        EWZ: 92566,
        cases: 19782,
        deaths: 152,
        cases_per_100k: 21370.6976643692,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Uelzen',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1074.9087137826,
        OBJECTID: 43
      }
    },
    {
      attributes: {
        EWZ: 137574,
        cases: 32956,
        deaths: 141,
        cases_per_100k: 23955.1077965313,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Verden',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 866.44278715455,
        OBJECTID: 44
      }
    },
    {
      attributes: {
        EWZ: 77503,
        cases: 19972,
        deaths: 89,
        cases_per_100k: 25769.3250583848,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'SK Delmenhorst',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1056.7332877437,
        OBJECTID: 45
      }
    },
    {
      attributes: {
        EWZ: 49874,
        cases: 13660,
        deaths: 40,
        cases_per_100k: 27389.0203312347,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'SK Emden',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 976.460680915908,
        OBJECTID: 46
      }
    },
    {
      attributes: {
        EWZ: 169605,
        cases: 38793,
        deaths: 60,
        cases_per_100k: 22872.5568232069,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'SK Oldenburg',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1242.29828130067,
        OBJECTID: 47
      }
    },
    {
      attributes: {
        EWZ: 164223,
        cases: 45831,
        deaths: 147,
        cases_per_100k: 27907.7839279516,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'SK Osnabrück',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 848.236848675277,
        OBJECTID: 48
      }
    },
    {
      attributes: {
        EWZ: 75189,
        cases: 16978,
        deaths: 96,
        cases_per_100k: 22580.4306481001,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'SK Wilhelmshaven',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 699.570415885302,
        OBJECTID: 49
      }
    },
    {
      attributes: {
        EWZ: 125643,
        cases: 25582,
        deaths: 88,
        cases_per_100k: 20360.8637170395,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Ammerland',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1374.52942066012,
        OBJECTID: 50
      }
    },
    {
      attributes: {
        EWZ: 190178,
        cases: 46409,
        deaths: 130,
        cases_per_100k: 24402.927783445,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Aurich',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 953.843241594717,
        OBJECTID: 51
      }
    },
    {
      attributes: {
        EWZ: 172632,
        cases: 54961,
        deaths: 214,
        cases_per_100k: 31837.0869827147,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Cloppenburg',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1229.20431901386,
        OBJECTID: 52
      }
    },
    {
      attributes: {
        EWZ: 328930,
        cases: 109164,
        deaths: 284,
        cases_per_100k: 33187.6083057185,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Emsland',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1320.9497461466,
        OBJECTID: 53
      }
    },
    {
      attributes: {
        EWZ: 98971,
        cases: 19448,
        deaths: 58,
        cases_per_100k: 19650.2005638015,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Friesland',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 880.055773913571,
        OBJECTID: 54
      }
    },
    {
      attributes: {
        EWZ: 137891,
        cases: 44957,
        deaths: 165,
        cases_per_100k: 32603.2881043723,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Grafschaft Bentheim',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1568.63029494311,
        OBJECTID: 55
      }
    },
    {
      attributes: {
        EWZ: 171483,
        cases: 42118,
        deaths: 107,
        cases_per_100k: 24561.0352046559,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Leer',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 905.045981234291,
        OBJECTID: 56
      }
    },
    {
      attributes: {
        EWZ: 131467,
        cases: 33008,
        deaths: 145,
        cases_per_100k: 25107.4414111526,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Oldenburg',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1626.26362509223,
        OBJECTID: 57
      }
    },
    {
      attributes: {
        EWZ: 359471,
        cases: 104177,
        deaths: 408,
        cases_per_100k: 28980.6409974657,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Osnabrück',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 927.473982602213,
        OBJECTID: 58
      }
    },
    {
      attributes: {
        EWZ: 143698,
        cases: 51742,
        deaths: 101,
        cases_per_100k: 36007.4600899108,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Vechta',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1068.90840512742,
        OBJECTID: 59
      }
    },
    {
      attributes: {
        EWZ: 88524,
        cases: 20310,
        deaths: 148,
        cases_per_100k: 22942.9307306493,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Wesermarsch',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1116.0815146175,
        OBJECTID: 60
      }
    },
    {
      attributes: {
        EWZ: 57384,
        cases: 13430,
        deaths: 54,
        cases_per_100k: 23403.7362330963,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Wittmund',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1287.81541893211,
        OBJECTID: 61
      }
    },
    {
      attributes: {
        EWZ: 566573,
        cases: 144596,
        deaths: 567,
        cases_per_100k: 25521.1596740402,
        BL: 'Bremen',
        BL_ID: '4',
        county: 'SK Bremen',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 846.669361229709,
        OBJECTID: 62
      }
    },
    {
      attributes: {
        EWZ: 113557,
        cases: 32925,
        deaths: 172,
        cases_per_100k: 28994.2495839094,
        BL: 'Bremen',
        BL_ID: '4',
        county: 'SK Bremerhaven',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 878.853791487975,
        OBJECTID: 63
      }
    },
    {
      attributes: {
        EWZ: 620523,
        cases: 172226,
        deaths: 822,
        cases_per_100k: 27754.9744328574,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'SK Düsseldorf',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 601.7504588871,
        OBJECTID: 64
      }
    },
    {
      attributes: {
        EWZ: 495885,
        cases: 108267,
        deaths: 890,
        cases_per_100k: 21833.0863002511,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'SK Duisburg',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 416.830515139599,
        OBJECTID: 65
      }
    },
    {
      attributes: {
        EWZ: 582415,
        cases: 133743,
        deaths: 753,
        cases_per_100k: 22963.5225741095,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'SK Essen',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 505.653185443369,
        OBJECTID: 66
      }
    },
    {
      attributes: {
        EWZ: 226844,
        cases: 60638,
        deaths: 264,
        cases_per_100k: 26731.1456331223,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'SK Krefeld',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 596.004302516267,
        OBJECTID: 67
      }
    },
    {
      attributes: {
        EWZ: 259665,
        cases: 60190,
        deaths: 327,
        cases_per_100k: 23179.8663662796,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'SK Mönchengladbach',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 623.495657866867,
        OBJECTID: 68
      }
    },
    {
      attributes: {
        EWZ: 170921,
        cases: 39570,
        deaths: 332,
        cases_per_100k: 23151.0463898526,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'SK Mülheim a.d.Ruhr',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 552.301940662645,
        OBJECTID: 69
      }
    },
    {
      attributes: {
        EWZ: 209566,
        cases: 47465,
        deaths: 455,
        cases_per_100k: 22649.1892768865,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'SK Oberhausen',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 414.189324604182,
        OBJECTID: 70
      }
    },
    {
      attributes: {
        EWZ: 111516,
        cases: 31655,
        deaths: 265,
        cases_per_100k: 28386.0611930127,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'SK Remscheid',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 698.554467520356,
        OBJECTID: 71
      }
    },
    {
      attributes: {
        EWZ: 159193,
        cases: 50425,
        deaths: 297,
        cases_per_100k: 31675.387736898,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'SK Solingen',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 704.804859510154,
        OBJECTID: 72
      }
    },
    {
      attributes: {
        EWZ: 355004,
        cases: 104014,
        deaths: 638,
        cases_per_100k: 29299.3881759079,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'SK Wuppertal',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 656.04894592737,
        OBJECTID: 73
      }
    },
    {
      attributes: {
        EWZ: 313586,
        cases: 72568,
        deaths: 338,
        cases_per_100k: 23141.3392179498,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'LK Kleve',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 748.120132914097,
        OBJECTID: 74
      }
    },
    {
      attributes: {
        EWZ: 484322,
        cases: 132976,
        deaths: 984,
        cases_per_100k: 27456.1139076895,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'LK Mettmann',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 619.422615532642,
        OBJECTID: 75
      }
    },
    {
      attributes: {
        EWZ: 452001,
        cases: 113574,
        deaths: 525,
        cases_per_100k: 25126.9355598771,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'LK Rhein-Kreis Neuss',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 711.724089105998,
        OBJECTID: 76
      }
    },
    {
      attributes: {
        EWZ: 298536,
        cases: 73404,
        deaths: 380,
        cases_per_100k: 24587.9893882145,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'LK Viersen',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 742.624005145108,
        OBJECTID: 77
      }
    },
    {
      attributes: {
        EWZ: 460113,
        cases: 111735,
        deaths: 398,
        cases_per_100k: 24284.2519120303,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'LK Wesel',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 544.21413870071,
        OBJECTID: 78
      }
    },
    {
      attributes: {
        EWZ: 330579,
        cases: 88353,
        deaths: 377,
        cases_per_100k: 26726.743078054,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'SK Bonn',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 576.564149567879,
        OBJECTID: 79
      }
    },
    {
      attributes: {
        EWZ: 1083498,
        cases: 328165,
        deaths: 1041,
        cases_per_100k: 30287.5501385328,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'SK Köln',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 506.323038898087,
        OBJECTID: 80
      }
    },
    {
      attributes: {
        EWZ: 163905,
        cases: 46179,
        deaths: 171,
        cases_per_100k: 28174.2472773863,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'SK Leverkusen',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 580.214148439645,
        OBJECTID: 81
      }
    },
    {
      attributes: {
        EWZ: 556631,
        cases: 149942,
        deaths: 802,
        cases_per_100k: 26937.4145529085,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'StädteRegion Aachen',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 723.100222589112,
        OBJECTID: 82
      }
    },
    {
      attributes: {
        EWZ: 265140,
        cases: 77966,
        deaths: 413,
        cases_per_100k: 29405.5970430716,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'LK Düren',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 776.570868220563,
        OBJECTID: 83
      }
    },
    {
      attributes: {
        EWZ: 469611,
        cases: 131690,
        deaths: 548,
        cases_per_100k: 28042.3584626425,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'LK Rhein-Erft-Kreis',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 637.974834490674,
        OBJECTID: 84
      }
    },
    {
      attributes: {
        EWZ: 194359,
        cases: 53434,
        deaths: 304,
        cases_per_100k: 27492.4238136644,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'LK Euskirchen',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 781.543432514059,
        OBJECTID: 85
      }
    },
    {
      attributes: {
        EWZ: 256458,
        cases: 55387,
        deaths: 474,
        cases_per_100k: 21596.9086556083,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'LK Heinsberg',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 520.943000413323,
        OBJECTID: 86
      }
    },
    {
      attributes: {
        EWZ: 271699,
        cases: 80572,
        deaths: 426,
        cases_per_100k: 29654.8754320038,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'LK Oberbergischer Kreis',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 585.942531993125,
        OBJECTID: 87
      }
    },
    {
      attributes: {
        EWZ: 283275,
        cases: 71641,
        deaths: 243,
        cases_per_100k: 25290.2656429265,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'LK Rheinisch-Bergischer Kreis',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 570.470390962845,
        OBJECTID: 88
      }
    },
    {
      attributes: {
        EWZ: 600375,
        cases: 136274,
        deaths: 755,
        cases_per_100k: 22698.1469914637,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'LK Rhein-Sieg-Kreis',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 326.2960649594,
        OBJECTID: 89
      }
    },
    {
      attributes: {
        EWZ: 117388,
        cases: 29094,
        deaths: 170,
        cases_per_100k: 24784.4754148635,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'SK Bottrop',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 495.79173339694,
        OBJECTID: 90
      }
    },
    {
      attributes: {
        EWZ: 259105,
        cases: 66174,
        deaths: 558,
        cases_per_100k: 25539.453117462,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'SK Gelsenkirchen',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 495.16605237259,
        OBJECTID: 91
      }
    },
    {
      attributes: {
        EWZ: 316403,
        cases: 81062,
        deaths: 197,
        cases_per_100k: 25619.8582187906,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'SK Münster',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1043.92183386378,
        OBJECTID: 92
      }
    },
    {
      attributes: {
        EWZ: 371898,
        cases: 123434,
        deaths: 424,
        cases_per_100k: 33190.2833572646,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'LK Borken',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1212.42921446203,
        OBJECTID: 93
      }
    },
    {
      attributes: {
        EWZ: 220712,
        cases: 59901,
        deaths: 129,
        cases_per_100k: 27139.892710863,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'LK Coesfeld',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1558.59219254051,
        OBJECTID: 94
      }
    },
    {
      attributes: {
        EWZ: 613599,
        cases: 149081,
        deaths: 1271,
        cases_per_100k: 24296.1608477198,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'LK Recklinghausen',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 604.303462033022,
        OBJECTID: 95
      }
    },
    {
      attributes: {
        EWZ: 448197,
        cases: 130460,
        deaths: 458,
        cases_per_100k: 29107.7361071136,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'LK Steinfurt',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1014.73236099305,
        OBJECTID: 96
      }
    },
    {
      attributes: {
        EWZ: 277417,
        cases: 77892,
        deaths: 339,
        cases_per_100k: 28077.5871702167,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'LK Warendorf',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1038.86928342531,
        OBJECTID: 97
      }
    },
    {
      attributes: {
        EWZ: 333509,
        cases: 89739,
        deaths: 536,
        cases_per_100k: 26907.5197370985,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'SK Bielefeld',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1216.15908416265,
        OBJECTID: 98
      }
    },
    {
      attributes: {
        EWZ: 364818,
        cases: 114870,
        deaths: 452,
        cases_per_100k: 31486.9332105324,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'LK Gütersloh',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 840.144948988263,
        OBJECTID: 99
      }
    },
    {
      attributes: {
        EWZ: 250547,
        cases: 78407,
        deaths: 311,
        cases_per_100k: 31294.3280103134,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'LK Herford',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 932.759123038791,
        OBJECTID: 100
      }
    },
    {
      attributes: {
        EWZ: 139729,
        cases: 34516,
        deaths: 197,
        cases_per_100k: 24702.1019258708,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'LK Höxter',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 810.139627421652,
        OBJECTID: 101
      }
    },
    {
      attributes: {
        EWZ: 346970,
        cases: 91894,
        deaths: 568,
        cases_per_100k: 26484.7104937026,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'LK Lippe',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 633.772372251203,
        OBJECTID: 102
      }
    },
    {
      attributes: {
        EWZ: 310270,
        cases: 103856,
        deaths: 449,
        cases_per_100k: 33472.7817707158,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'LK Minden-Lübbecke',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1360.42801431012,
        OBJECTID: 103
      }
    },
    {
      attributes: {
        EWZ: 308335,
        cases: 71120,
        deaths: 216,
        cases_per_100k: 23065.821265831,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'LK Paderborn',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 898.373522305285,
        OBJECTID: 104
      }
    },
    {
      attributes: {
        EWZ: 364454,
        cases: 84701,
        deaths: 414,
        cases_per_100k: 23240.5186937172,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'SK Bochum',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 522.974092752446,
        OBJECTID: 105
      }
    },
    {
      attributes: {
        EWZ: 587696,
        cases: 154597,
        deaths: 529,
        cases_per_100k: 26305.6069804797,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'SK Dortmund',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 678.241812093327,
        OBJECTID: 106
      }
    },
    {
      attributes: {
        EWZ: 188687,
        cases: 52591,
        deaths: 463,
        cases_per_100k: 27872.0844573288,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'SK Hagen',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 573.436431762655,
        OBJECTID: 107
      }
    },
    {
      attributes: {
        EWZ: 178967,
        cases: 51240,
        deaths: 280,
        cases_per_100k: 28630.9766605017,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'SK Hamm',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 813.557806746495,
        OBJECTID: 108
      }
    },
    {
      attributes: {
        EWZ: 156940,
        cases: 43065,
        deaths: 356,
        cases_per_100k: 27440.4230916274,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'SK Herne',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 662.673633235631,
        OBJECTID: 109
      }
    },
    {
      attributes: {
        EWZ: 323130,
        cases: 76387,
        deaths: 526,
        cases_per_100k: 23639.7115711943,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'LK Ennepe-Ruhr-Kreis',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 651.750069631418,
        OBJECTID: 110
      }
    },
    {
      attributes: {
        EWZ: 259030,
        cases: 68468,
        deaths: 266,
        cases_per_100k: 26432.4595606686,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'LK Hochsauerlandkreis',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 780.218507508783,
        OBJECTID: 111
      }
    },
    {
      attributes: {
        EWZ: 408662,
        cases: 116165,
        deaths: 616,
        cases_per_100k: 28425.6916473761,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'LK Märkischer Kreis',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 879.700094454586,
        OBJECTID: 112
      }
    },
    {
      attributes: {
        EWZ: 133362,
        cases: 33394,
        deaths: 201,
        cases_per_100k: 25040.1163749794,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'LK Olpe',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 779.83233604775,
        OBJECTID: 113
      }
    },
    {
      attributes: {
        EWZ: 275491,
        cases: 76146,
        deaths: 263,
        cases_per_100k: 27640.1043954249,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'LK Siegen-Wittgenstein',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 890.047224773223,
        OBJECTID: 114
      }
    },
    {
      attributes: {
        EWZ: 301016,
        cases: 74582,
        deaths: 350,
        cases_per_100k: 24776.7560528344,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'LK Soest',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 645.812847157626,
        OBJECTID: 115
      }
    },
    {
      attributes: {
        EWZ: 393618,
        cases: 92856,
        deaths: 645,
        cases_per_100k: 23590.3845860708,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'LK Unna',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 676.79831715013,
        OBJECTID: 116
      }
    },
    {
      attributes: {
        EWZ: 159174,
        cases: 39229,
        deaths: 201,
        cases_per_100k: 24645.3566537249,
        BL: 'Hessen',
        BL_ID: '6',
        county: 'SK Darmstadt',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 809.177378215035,
        OBJECTID: 117
      }
    },
    {
      attributes: {
        EWZ: 764104,
        cases: 214356,
        deaths: 1199,
        cases_per_100k: 28053.2492959074,
        BL: 'Hessen',
        BL_ID: '6',
        county: 'SK Frankfurt am Main',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 689.827562740151,
        OBJECTID: 118
      }
    },
    {
      attributes: {
        EWZ: 130892,
        cases: 40898,
        deaths: 264,
        cases_per_100k: 31245.6070653669,
        BL: 'Hessen',
        BL_ID: '6',
        county: 'SK Offenbach',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 536.320019558109,
        OBJECTID: 119
      }
    },
    {
      attributes: {
        EWZ: 278609,
        cases: 78335,
        deaths: 390,
        cases_per_100k: 28116.4642922519,
        BL: 'Hessen',
        BL_ID: '6',
        county: 'SK Wiesbaden',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 831.27250017049,
        OBJECTID: 120
      }
    },
    {
      attributes: {
        EWZ: 271015,
        cases: 74275,
        deaths: 447,
        cases_per_100k: 27406.232127373,
        BL: 'Hessen',
        BL_ID: '6',
        county: 'LK Bergstraße',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1114.32946515876,
        OBJECTID: 121
      }
    },
    {
      attributes: {
        EWZ: 297701,
        cases: 72088,
        deaths: 418,
        cases_per_100k: 24214.900185085,
        BL: 'Hessen',
        BL_ID: '6',
        county: 'LK Darmstadt-Dieburg',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 851.86143143624,
        OBJECTID: 122
      }
    },
    {
      attributes: {
        EWZ: 275807,
        cases: 71473,
        deaths: 373,
        cases_per_100k: 25914.135609321,
        BL: 'Hessen',
        BL_ID: '6',
        county: 'LK Groß-Gerau',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 753.787974924494,
        OBJECTID: 123
      }
    },
    {
      attributes: {
        EWZ: 237281,
        cases: 55775,
        deaths: 264,
        cases_per_100k: 23505.8854269832,
        BL: 'Hessen',
        BL_ID: '6',
        county: 'LK Hochtaunuskreis',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1070.46076171291,
        OBJECTID: 124
      }
    },
    {
      attributes: {
        EWZ: 421689,
        cases: 118219,
        deaths: 841,
        cases_per_100k: 28034.6416434861,
        BL: 'Hessen',
        BL_ID: '6',
        county: 'LK Main-Kinzig-Kreis',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 966.351979776565,
        OBJECTID: 125
      }
    },
    {
      attributes: {
        EWZ: 239264,
        cases: 59534,
        deaths: 296,
        cases_per_100k: 24882.1385582453,
        BL: 'Hessen',
        BL_ID: '6',
        county: 'LK Main-Taunus-Kreis',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 771.950648655878,
        OBJECTID: 126
      }
    },
    {
      attributes: {
        EWZ: 96754,
        cases: 27067,
        deaths: 221,
        cases_per_100k: 27975.0707981065,
        BL: 'Hessen',
        BL_ID: '6',
        county: 'LK Odenwaldkreis',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1039.75029456147,
        OBJECTID: 127
      }
    },
    {
      attributes: {
        EWZ: 356542,
        cases: 98263,
        deaths: 748,
        cases_per_100k: 27560.0069557023,
        BL: 'Hessen',
        BL_ID: '6',
        county: 'LK Offenbach',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 820.099735795502,
        OBJECTID: 128
      }
    },
    {
      attributes: {
        EWZ: 187433,
        cases: 46639,
        deaths: 215,
        cases_per_100k: 24883.0248675527,
        BL: 'Hessen',
        BL_ID: '6',
        county: 'LK Rheingau-Taunus-Kreis',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 903.789620824508,
        OBJECTID: 129
      }
    },
    {
      attributes: {
        EWZ: 310353,
        cases: 77196,
        deaths: 632,
        cases_per_100k: 24873.6116615596,
        BL: 'Hessen',
        BL_ID: '6',
        county: 'LK Wetteraukreis',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 756.557855087594,
        OBJECTID: 130
      }
    },
    {
      attributes: {
        EWZ: 271667,
        cases: 73776,
        deaths: 406,
        cases_per_100k: 27156.7764947528,
        BL: 'Hessen',
        BL_ID: '6',
        county: 'LK Gießen',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1159.50777974506,
        OBJECTID: 131
      }
    },
    {
      attributes: {
        EWZ: 253373,
        cases: 67555,
        deaths: 299,
        cases_per_100k: 26662.2726178401,
        BL: 'Hessen',
        BL_ID: '6',
        county: 'LK Lahn-Dill-Kreis',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1162.7126805145,
        OBJECTID: 132
      }
    },
    {
      attributes: {
        EWZ: 172291,
        cases: 46036,
        deaths: 344,
        cases_per_100k: 26719.9099198449,
        BL: 'Hessen',
        BL_ID: '6',
        county: 'LK Limburg-Weilburg',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 762.082755338352,
        OBJECTID: 133
      }
    },
    {
      attributes: {
        EWZ: 245903,
        cases: 62464,
        deaths: 340,
        cases_per_100k: 25401.8861095635,
        BL: 'Hessen',
        BL_ID: '6',
        county: 'LK Marburg-Biedenkopf',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 887.748421125403,
        OBJECTID: 134
      }
    },
    {
      attributes: {
        EWZ: 105506,
        cases: 27070,
        deaths: 122,
        cases_per_100k: 25657.308589085,
        BL: 'Hessen',
        BL_ID: '6',
        county: 'LK Vogelsbergkreis',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1378.12067560139,
        OBJECTID: 135
      }
    },
    {
      attributes: {
        EWZ: 201048,
        cases: 45599,
        deaths: 251,
        cases_per_100k: 22680.6533763081,
        BL: 'Hessen',
        BL_ID: '6',
        county: 'SK Kassel',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 453.623015399308,
        OBJECTID: 136
      }
    },
    {
      attributes: {
        EWZ: 223023,
        cases: 75571,
        deaths: 382,
        cases_per_100k: 33884.8459575918,
        BL: 'Hessen',
        BL_ID: '6',
        county: 'LK Fulda',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1328.56252494137,
        OBJECTID: 137
      }
    },
    {
      attributes: {
        EWZ: 120304,
        cases: 28778,
        deaths: 219,
        cases_per_100k: 23921.066631201,
        BL: 'Hessen',
        BL_ID: '6',
        county: 'LK Hersfeld-Rotenburg',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 610.121026732278,
        OBJECTID: 138
      }
    },
    {
      attributes: {
        EWZ: 237007,
        cases: 46397,
        deaths: 277,
        cases_per_100k: 19576.2150485007,
        BL: 'Hessen',
        BL_ID: '6',
        county: 'LK Kassel',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 624.454130046792,
        OBJECTID: 139
      }
    },
    {
      attributes: {
        EWZ: 179840,
        cases: 40097,
        deaths: 280,
        cases_per_100k: 22295.9297153025,
        BL: 'Hessen',
        BL_ID: '6',
        county: 'LK Schwalm-Eder-Kreis',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1107.09519572954,
        OBJECTID: 140
      }
    },
    {
      attributes: {
        EWZ: 156528,
        cases: 37002,
        deaths: 179,
        cases_per_100k: 23639.2210978228,
        BL: 'Hessen',
        BL_ID: '6',
        county: 'LK Waldeck-Frankenberg',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 745.553511192886,
        OBJECTID: 141
      }
    },
    {
      attributes: {
        EWZ: 100046,
        cases: 22429,
        deaths: 203,
        cases_per_100k: 22418.6874037943,
        BL: 'Hessen',
        BL_ID: '6',
        county: 'LK Werra-Meißner-Kreis',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1111.48871519101,
        OBJECTID: 142
      }
    },
    {
      attributes: {
        EWZ: 113388,
        cases: 29579,
        deaths: 184,
        cases_per_100k: 26086.5347303066,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'SK Koblenz',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 522.983031714114,
        OBJECTID: 143
      }
    },
    {
      attributes: {
        EWZ: 130479,
        cases: 28966,
        deaths: 92,
        cases_per_100k: 22199.7409544831,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'LK Ahrweiler',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 602.395787827926,
        OBJECTID: 144
      }
    },
    {
      attributes: {
        EWZ: 129087,
        cases: 30261,
        deaths: 136,
        cases_per_100k: 23442.3295916707,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'LK Altenkirchen',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 692.556183039346,
        OBJECTID: 145
      }
    },
    {
      attributes: {
        EWZ: 158746,
        cases: 42832,
        deaths: 175,
        cases_per_100k: 26981.4672495685,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'LK Bad Kreuznach',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 833.406825998765,
        OBJECTID: 146
      }
    },
    {
      attributes: {
        EWZ: 80830,
        cases: 21046,
        deaths: 145,
        cases_per_100k: 26037.3623654584,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'LK Birkenfeld',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1031.79512557219,
        OBJECTID: 147
      }
    },
    {
      attributes: {
        EWZ: 61578,
        cases: 15137,
        deaths: 92,
        cases_per_100k: 24581.831173471,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'LK Cochem-Zell',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 768.131475526974,
        OBJECTID: 148
      }
    },
    {
      attributes: {
        EWZ: 214786,
        cases: 54357,
        deaths: 227,
        cases_per_100k: 25307.5153874089,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'LK Mayen-Koblenz',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 522.845995549058,
        OBJECTID: 149
      }
    },
    {
      attributes: {
        EWZ: 183131,
        cases: 42126,
        deaths: 239,
        cases_per_100k: 23003.205355729,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'LK Neuwied',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 689.670236060525,
        OBJECTID: 150
      }
    },
    {
      attributes: {
        EWZ: 103401,
        cases: 23478,
        deaths: 126,
        cases_per_100k: 22705.7765398787,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'LK Rhein-Hunsrück-Kreis',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 645.061459753774,
        OBJECTID: 151
      }
    },
    {
      attributes: {
        EWZ: 122574,
        cases: 28239,
        deaths: 119,
        cases_per_100k: 23038.3278672475,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'LK Rhein-Lahn-Kreis',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 775.042015435574,
        OBJECTID: 152
      }
    },
    {
      attributes: {
        EWZ: 202830,
        cases: 50594,
        deaths: 233,
        cases_per_100k: 24944.041808411,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'LK Westerwaldkreis',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 868.21476113001,
        OBJECTID: 153
      }
    },
    {
      attributes: {
        EWZ: 110674,
        cases: 26245,
        deaths: 59,
        cases_per_100k: 23713.7900500569,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'SK Trier',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 828.559553282614,
        OBJECTID: 154
      }
    },
    {
      attributes: {
        EWZ: 112685,
        cases: 25503,
        deaths: 105,
        cases_per_100k: 22632.1160757865,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'LK Bernkastel-Wittlich',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 953.099347739273,
        OBJECTID: 155
      }
    },
    {
      attributes: {
        EWZ: 100055,
        cases: 22280,
        deaths: 51,
        cases_per_100k: 22267.7527359952,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'LK Bitburg-Prüm',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 429.763630003498,
        OBJECTID: 156
      }
    },
    {
      attributes: {
        EWZ: 60491,
        cases: 16774,
        deaths: 83,
        cases_per_100k: 27729.744920732,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'LK Vulkaneifel',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1891.1904250219,
        OBJECTID: 157
      }
    },
    {
      attributes: {
        EWZ: 150533,
        cases: 35540,
        deaths: 134,
        cases_per_100k: 23609.441119223,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'LK Trier-Saarburg',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 823.739645127646,
        OBJECTID: 158
      }
    },
    {
      attributes: {
        EWZ: 48750,
        cases: 12585,
        deaths: 87,
        cases_per_100k: 25815.3846153846,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'SK Frankenthal',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 283.076923076923,
        OBJECTID: 159
      }
    },
    {
      attributes: {
        EWZ: 99662,
        cases: 27369,
        deaths: 197,
        cases_per_100k: 27461.8209548273,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'SK Kaiserslautern',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 707.390981517529,
        OBJECTID: 160
      }
    },
    {
      attributes: {
        EWZ: 46685,
        cases: 9775,
        deaths: 64,
        cases_per_100k: 20938.2028488808,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'SK Landau i.d.Pfalz',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 454.107314983399,
        OBJECTID: 161
      }
    },
    {
      attributes: {
        EWZ: 172557,
        cases: 47026,
        deaths: 412,
        cases_per_100k: 27252.444119914,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'SK Ludwigshafen',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 321.053333101526,
        OBJECTID: 162
      }
    },
    {
      attributes: {
        EWZ: 217123,
        cases: 59775,
        deaths: 255,
        cases_per_100k: 27530.4781160909,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'SK Mainz',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 582.158500020726,
        OBJECTID: 163
      }
    },
    {
      attributes: {
        EWZ: 53306,
        cases: 13797,
        deaths: 62,
        cases_per_100k: 25882.6398529246,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'SK Neustadt a.d.Weinstraße',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 861.066296476944,
        OBJECTID: 164
      }
    },
    {
      attributes: {
        EWZ: 40176,
        cases: 9191,
        deaths: 92,
        cases_per_100k: 22876.8418956591,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'SK Pirmasens',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 408.203902827559,
        OBJECTID: 165
      }
    },
    {
      attributes: {
        EWZ: 50741,
        cases: 14373,
        deaths: 115,
        cases_per_100k: 28326.205632526,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'SK Speyer',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 372.479848643109,
        OBJECTID: 166
      }
    },
    {
      attributes: {
        EWZ: 83459,
        cases: 24178,
        deaths: 132,
        cases_per_100k: 28969.9133706371,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'SK Worms',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 696.150205490121,
        OBJECTID: 167
      }
    },
    {
      attributes: {
        EWZ: 34001,
        cases: 7708,
        deaths: 26,
        cases_per_100k: 22669.9214728979,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'SK Zweibrücken',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 476.456574806623,
        OBJECTID: 168
      }
    },
    {
      attributes: {
        EWZ: 130715,
        cases: 33190,
        deaths: 182,
        cases_per_100k: 25391.118081322,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'LK Alzey-Worms',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 940.978464598554,
        OBJECTID: 169
      }
    },
    {
      attributes: {
        EWZ: 133004,
        cases: 30580,
        deaths: 211,
        cases_per_100k: 22991.7897206099,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'LK Bad Dürkheim',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 708.249375958618,
        OBJECTID: 170
      }
    },
    {
      attributes: {
        EWZ: 75539,
        cases: 19200,
        deaths: 106,
        cases_per_100k: 25417.3340923232,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'LK Donnersbergkreis',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 836.653913872304,
        OBJECTID: 171
      }
    },
    {
      attributes: {
        EWZ: 129006,
        cases: 38870,
        deaths: 202,
        cases_per_100k: 30130.3815326419,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'LK Germersheim',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 328.666883710835,
        OBJECTID: 172
      }
    },
    {
      attributes: {
        EWZ: 106320,
        cases: 32739,
        deaths: 145,
        cases_per_100k: 30792.8893905192,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'LK Kaiserslautern',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1002.63355906697,
        OBJECTID: 173
      }
    },
    {
      attributes: {
        EWZ: 70105,
        cases: 16820,
        deaths: 102,
        cases_per_100k: 23992.5825547393,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'LK Kusel',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 969.973611012053,
        OBJECTID: 174
      }
    },
    {
      attributes: {
        EWZ: 110783,
        cases: 21739,
        deaths: 163,
        cases_per_100k: 19623.0468573698,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'LK Südliche Weinstraße',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 454.94344800195,
        OBJECTID: 175
      }
    },
    {
      attributes: {
        EWZ: 154754,
        cases: 37611,
        deaths: 279,
        cases_per_100k: 24303.7336676273,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'LK Rhein-Pfalz-Kreis',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 370.91125269783,
        OBJECTID: 176
      }
    },
    {
      attributes: {
        EWZ: 211525,
        cases: 54097,
        deaths: 286,
        cases_per_100k: 25574.7547571209,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'LK Mainz-Bingen',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 812.197139817988,
        OBJECTID: 177
      }
    },
    {
      attributes: {
        EWZ: 94912,
        cases: 20301,
        deaths: 130,
        cases_per_100k: 21389.2869184086,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'LK Südwestpfalz',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 564.733648010789,
        OBJECTID: 178
      }
    },
    {
      attributes: {
        EWZ: 630305,
        cases: 162870,
        deaths: 666,
        cases_per_100k: 25839.8711734795,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'SK Stuttgart',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 559.570366727219,
        OBJECTID: 179
      }
    },
    {
      attributes: {
        EWZ: 392898,
        cases: 118253,
        deaths: 454,
        cases_per_100k: 30097.6334824815,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Böblingen',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 834.822269393074,
        OBJECTID: 180
      }
    },
    {
      attributes: {
        EWZ: 533617,
        cases: 161553,
        deaths: 796,
        cases_per_100k: 30275.084939198,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Esslingen',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 763.656330289327,
        OBJECTID: 181
      }
    },
    {
      attributes: {
        EWZ: 258781,
        cases: 79102,
        deaths: 385,
        cases_per_100k: 30567.1591036436,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Göppingen',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 473.373238375306,
        OBJECTID: 182
      }
    },
    {
      attributes: {
        EWZ: 544971,
        cases: 154133,
        deaths: 706,
        cases_per_100k: 28282.7893594338,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Ludwigsburg',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 576.544439979375,
        OBJECTID: 183
      }
    },
    {
      attributes: {
        EWZ: 427286,
        cases: 126071,
        deaths: 579,
        cases_per_100k: 29505.0621831747,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Rems-Murr-Kreis',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 777.699245938318,
        OBJECTID: 184
      }
    },
    {
      attributes: {
        EWZ: 126458,
        cases: 43625,
        deaths: 260,
        cases_per_100k: 34497.6197630834,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'SK Heilbronn',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 540.891046829777,
        OBJECTID: 185
      }
    },
    {
      attributes: {
        EWZ: 346363,
        cases: 112219,
        deaths: 321,
        cases_per_100k: 32399.2458778796,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Heilbronn',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 739.108969491545,
        OBJECTID: 186
      }
    },
    {
      attributes: {
        EWZ: 112765,
        cases: 35809,
        deaths: 177,
        cases_per_100k: 31755.4205648916,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Hohenlohekreis',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 522.325189553496,
        OBJECTID: 187
      }
    },
    {
      attributes: {
        EWZ: 197860,
        cases: 62005,
        deaths: 329,
        cases_per_100k: 31337.8146163954,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Schwäbisch Hall',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 648.943697563934,
        OBJECTID: 188
      }
    },
    {
      attributes: {
        EWZ: 132684,
        cases: 38942,
        deaths: 190,
        cases_per_100k: 29349.4317325375,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Main-Tauber-Kreis',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 601.428959030478,
        OBJECTID: 189
      }
    },
    {
      attributes: {
        EWZ: 132812,
        cases: 43666,
        deaths: 297,
        cases_per_100k: 32878.0531879649,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Heidenheim',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 501.460711381502,
        OBJECTID: 190
      }
    },
    {
      attributes: {
        EWZ: 314294,
        cases: 101930,
        deaths: 564,
        cases_per_100k: 32431.4177171693,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Ostalbkreis',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 721.61733917924,
        OBJECTID: 191
      }
    },
    {
      attributes: {
        EWZ: 55449,
        cases: 15266,
        deaths: 104,
        cases_per_100k: 27531.6056195784,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'SK Baden-Baden',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 663.672924669516,
        OBJECTID: 192
      }
    },
    {
      attributes: {
        EWZ: 308436,
        cases: 83022,
        deaths: 343,
        cases_per_100k: 26917.0913901101,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'SK Karlsruhe',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 798.869133304802,
        OBJECTID: 193
      }
    },
    {
      attributes: {
        EWZ: 446852,
        cases: 132880,
        deaths: 686,
        cases_per_100k: 29736.9151307368,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Karlsruhe',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 987.127729091511,
        OBJECTID: 194
      }
    },
    {
      attributes: {
        EWZ: 232091,
        cases: 71899,
        deaths: 358,
        cases_per_100k: 30978.7971097544,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Rastatt',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 804.856715684796,
        OBJECTID: 195
      }
    },
    {
      attributes: {
        EWZ: 158741,
        cases: 38718,
        deaths: 109,
        cases_per_100k: 24390.6741169578,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'SK Heidelberg',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 767.917551231251,
        OBJECTID: 196
      }
    },
    {
      attributes: {
        EWZ: 309721,
        cases: 92415,
        deaths: 470,
        cases_per_100k: 29838.1446527681,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'SK Mannheim',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 779.088276222794,
        OBJECTID: 197
      }
    },
    {
      attributes: {
        EWZ: 143797,
        cases: 45567,
        deaths: 210,
        cases_per_100k: 31688.4218725008,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Neckar-Odenwald-Kreis',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 946.473153125587,
        OBJECTID: 198
      }
    },
    {
      attributes: {
        EWZ: 548233,
        cases: 153622,
        deaths: 657,
        cases_per_100k: 28021.2975140132,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Rhein-Neckar-Kreis',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 914.757046730131,
        OBJECTID: 199
      }
    },
    {
      attributes: {
        EWZ: 126016,
        cases: 41911,
        deaths: 315,
        cases_per_100k: 33258.4751142712,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'SK Pforzheim',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 522.155916708989,
        OBJECTID: 200
      }
    },
    {
      attributes: {
        EWZ: 160149,
        cases: 48868,
        deaths: 275,
        cases_per_100k: 30514.083759499,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Calw',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 536.375500315331,
        OBJECTID: 201
      }
    },
    {
      attributes: {
        EWZ: 199752,
        cases: 60591,
        deaths: 333,
        cases_per_100k: 30333.1130601946,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Enzkreis',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 724.89887460451,
        OBJECTID: 202
      }
    },
    {
      attributes: {
        EWZ: 118364,
        cases: 38323,
        deaths: 231,
        cases_per_100k: 32377.2430806664,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Freudenstadt',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 468.892568686425,
        OBJECTID: 203
      }
    },
    {
      attributes: {
        EWZ: 230940,
        cases: 68894,
        deaths: 247,
        cases_per_100k: 29831.9909933316,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'SK Freiburg i.Breisgau',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 685.026413787131,
        OBJECTID: 204
      }
    },
    {
      attributes: {
        EWZ: 264867,
        cases: 74855,
        deaths: 308,
        cases_per_100k: 28261.3538115356,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Breisgau-Hochschwarzwald',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 633.52550525358,
        OBJECTID: 205
      }
    },
    {
      attributes: {
        EWZ: 166862,
        cases: 50361,
        deaths: 232,
        cases_per_100k: 30181.2276012513,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Emmendingen',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 772.494636286272,
        OBJECTID: 206
      }
    },
    {
      attributes: {
        EWZ: 432580,
        cases: 145991,
        deaths: 754,
        cases_per_100k: 33748.9019372139,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Ortenaukreis',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 575.15372879005,
        OBJECTID: 207
      }
    },
    {
      attributes: {
        EWZ: 140166,
        cases: 49946,
        deaths: 272,
        cases_per_100k: 35633.463179373,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Rottweil',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 473.010573177518,
        OBJECTID: 208
      }
    },
    {
      attributes: {
        EWZ: 212872,
        cases: 71975,
        deaths: 356,
        cases_per_100k: 33811.3983990379,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Schwarzwald-Baar-Kreis',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 333.533766770642,
        OBJECTID: 209
      }
    },
    {
      attributes: {
        EWZ: 141682,
        cases: 48885,
        deaths: 247,
        cases_per_100k: 34503.3243460708,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Tuttlingen',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 426.306799734617,
        OBJECTID: 210
      }
    },
    {
      attributes: {
        EWZ: 286876,
        cases: 84963,
        deaths: 423,
        cases_per_100k: 29616.6287873506,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Konstanz',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 492.198720004462,
        OBJECTID: 211
      }
    },
    {
      attributes: {
        EWZ: 228842,
        cases: 65261,
        deaths: 411,
        cases_per_100k: 28517.9294010715,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Lörrach',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 439.604618033403,
        OBJECTID: 212
      }
    },
    {
      attributes: {
        EWZ: 171237,
        cases: 50072,
        deaths: 311,
        cases_per_100k: 29241.3438684397,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Waldshut',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 482.956370410601,
        OBJECTID: 213
      }
    },
    {
      attributes: {
        EWZ: 287497,
        cases: 90487,
        deaths: 434,
        cases_per_100k: 31474.0675554875,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Reutlingen',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 693.572454669092,
        OBJECTID: 214
      }
    },
    {
      attributes: {
        EWZ: 228471,
        cases: 66626,
        deaths: 245,
        cases_per_100k: 29161.6879166284,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Tübingen',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 795.286929194515,
        OBJECTID: 215
      }
    },
    {
      attributes: {
        EWZ: 189862,
        cases: 61511,
        deaths: 232,
        cases_per_100k: 32397.7415175233,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Zollernalbkreis',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 630.457911535747,
        OBJECTID: 216
      }
    },
    {
      attributes: {
        EWZ: 126405,
        cases: 40391,
        deaths: 113,
        cases_per_100k: 31953.6410743246,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'SK Ulm',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 617.064198409873,
        OBJECTID: 217
      }
    },
    {
      attributes: {
        EWZ: 198204,
        cases: 64401,
        deaths: 228,
        cases_per_100k: 32492.280680511,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Alb-Donau-Kreis',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 677.584710702105,
        OBJECTID: 218
      }
    },
    {
      attributes: {
        EWZ: 202250,
        cases: 69424,
        deaths: 276,
        cases_per_100k: 34325.8343634116,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Biberach',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 666.007416563659,
        OBJECTID: 219
      }
    },
    {
      attributes: {
        EWZ: 217901,
        cases: 66380,
        deaths: 303,
        cases_per_100k: 30463.3755696394,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Bodenseekreis',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 574.113932473922,
        OBJECTID: 220
      }
    },
    {
      attributes: {
        EWZ: 285888,
        cases: 93856,
        deaths: 220,
        cases_per_100k: 32829.6395791359,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Ravensburg',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 879.715133199015,
        OBJECTID: 221
      }
    },
    {
      attributes: {
        EWZ: 130946,
        cases: 47114,
        deaths: 164,
        cases_per_100k: 35979.7168298383,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Sigmaringen',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 606.356818841354,
        OBJECTID: 222
      }
    },
    {
      attributes: {
        EWZ: 136952,
        cases: 47390,
        deaths: 242,
        cases_per_100k: 34603.3646825165,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'SK Ingolstadt',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 491.413049827677,
        OBJECTID: 223
      }
    },
    {
      attributes: {
        EWZ: 1488202,
        cases: 484069,
        deaths: 1964,
        cases_per_100k: 32527.1031755098,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'SK München',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 606.772467716076,
        OBJECTID: 224
      }
    },
    {
      attributes: {
        EWZ: 63591,
        cases: 24331,
        deaths: 124,
        cases_per_100k: 38261.7037002091,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'SK Rosenheim',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 591.278640059128,
        OBJECTID: 225
      }
    },
    {
      attributes: {
        EWZ: 111654,
        cases: 42114,
        deaths: 324,
        cases_per_100k: 37718.3083454243,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Altötting',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 747.846024325147,
        OBJECTID: 226
      }
    },
    {
      attributes: {
        EWZ: 106327,
        cases: 40621,
        deaths: 185,
        cases_per_100k: 38203.842862114,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Berchtesgadener Land',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 498.462290857449,
        OBJECTID: 227
      }
    },
    {
      attributes: {
        EWZ: 128212,
        cases: 44167,
        deaths: 177,
        cases_per_100k: 34448.4135650329,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Bad Tölz-Wolfratshausen',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 533.4914048607,
        OBJECTID: 228
      }
    },
    {
      attributes: {
        EWZ: 155117,
        cases: 55502,
        deaths: 232,
        cases_per_100k: 35780.7332529639,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Dachau',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 943.159034793092,
        OBJECTID: 229
      }
    },
    {
      attributes: {
        EWZ: 144091,
        cases: 48937,
        deaths: 272,
        cases_per_100k: 33962.5653233026,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Ebersberg',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1098.61129425155,
        OBJECTID: 230
      }
    },
    {
      attributes: {
        EWZ: 133169,
        cases: 45971,
        deaths: 139,
        cases_per_100k: 34520.7968821573,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Eichstätt',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 748.672739151004,
        OBJECTID: 231
      }
    },
    {
      attributes: {
        EWZ: 138891,
        cases: 51722,
        deaths: 180,
        cases_per_100k: 37239.2739630358,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Erding',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 640.070270931882,
        OBJECTID: 232
      }
    },
    {
      attributes: {
        EWZ: 180313,
        cases: 59784,
        deaths: 213,
        cases_per_100k: 33155.6792910106,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Freising',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 726.514449873276,
        OBJECTID: 233
      }
    },
    {
      attributes: {
        EWZ: 218740,
        cases: 68864,
        deaths: 225,
        cases_per_100k: 31482.1248971382,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Fürstenfeldbruck',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 908.384383286093,
        OBJECTID: 234
      }
    },
    {
      attributes: {
        EWZ: 88279,
        cases: 28186,
        deaths: 147,
        cases_per_100k: 31928.3181730649,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Garmisch-Partenkirchen',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 574.315522377916,
        OBJECTID: 235
      }
    },
    {
      attributes: {
        EWZ: 121019,
        cases: 38862,
        deaths: 122,
        cases_per_100k: 32112.3129425958,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Landsberg a.Lech',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 774.258587494526,
        OBJECTID: 236
      }
    },
    {
      attributes: {
        EWZ: 100183,
        cases: 34274,
        deaths: 182,
        cases_per_100k: 34211.3931505345,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Miesbach',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 603.894872383538,
        OBJECTID: 237
      }
    },
    {
      attributes: {
        EWZ: 116483,
        cases: 48173,
        deaths: 299,
        cases_per_100k: 41356.2494097851,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Mühldorf a.Inn',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 952.070259179451,
        OBJECTID: 238
      }
    },
    {
      attributes: {
        EWZ: 349685,
        cases: 106686,
        deaths: 362,
        cases_per_100k: 30509.1725410012,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK München',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 618.842672691136,
        OBJECTID: 239
      }
    },
    {
      attributes: {
        EWZ: 97730,
        cases: 35923,
        deaths: 130,
        cases_per_100k: 36757.3928169446,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Neuburg-Schrobenhausen',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 894.300624168628,
        OBJECTID: 240
      }
    },
    {
      attributes: {
        EWZ: 129128,
        cases: 44694,
        deaths: 234,
        cases_per_100k: 34612.1677715135,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Pfaffenhofen a.d.Ilm',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 713.245771637445,
        OBJECTID: 241
      }
    },
    {
      attributes: {
        EWZ: 261721,
        cases: 100987,
        deaths: 700,
        cases_per_100k: 38585.745889707,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Rosenheim',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 766.465052479549,
        OBJECTID: 242
      }
    },
    {
      attributes: {
        EWZ: 136610,
        cases: 39904,
        deaths: 164,
        cases_per_100k: 29210.1603103726,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Starnberg',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 633.189371202694,
        OBJECTID: 243
      }
    },
    {
      attributes: {
        EWZ: 177485,
        cases: 72184,
        deaths: 345,
        cases_per_100k: 40670.479195425,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Traunstein',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 624.278108009128,
        OBJECTID: 244
      }
    },
    {
      attributes: {
        EWZ: 136134,
        cases: 45346,
        deaths: 183,
        cases_per_100k: 33309.8270821397,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Weilheim-Schongau',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 874.138716264857,
        OBJECTID: 245
      }
    },
    {
      attributes: {
        EWZ: 73065,
        cases: 24070,
        deaths: 170,
        cases_per_100k: 32943.2696913707,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'SK Landshut',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 602.203517416,
        OBJECTID: 246
      }
    },
    {
      attributes: {
        EWZ: 52415,
        cases: 17718,
        deaths: 144,
        cases_per_100k: 33803.3005818945,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'SK Passau',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 459.792044262139,
        OBJECTID: 247
      }
    },
    {
      attributes: {
        EWZ: 47612,
        cases: 16019,
        deaths: 130,
        cases_per_100k: 33644.8794421574,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'SK Straubing',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 861.127446862136,
        OBJECTID: 248
      }
    },
    {
      attributes: {
        EWZ: 119479,
        cases: 44645,
        deaths: 279,
        cases_per_100k: 37366.3991161627,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Deggendorf',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 629.399308665121,
        OBJECTID: 249
      }
    },
    {
      attributes: {
        EWZ: 78355,
        cases: 31283,
        deaths: 216,
        cases_per_100k: 39924.7016782592,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Freyung-Grafenau',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 558.994320719801,
        OBJECTID: 250
      }
    },
    {
      attributes: {
        EWZ: 123390,
        cases: 43901,
        deaths: 158,
        cases_per_100k: 35579.0582705244,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Kelheim',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 910.122376205527,
        OBJECTID: 251
      }
    },
    {
      attributes: {
        EWZ: 161191,
        cases: 57609,
        deaths: 293,
        cases_per_100k: 35739.5884385605,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Landshut',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 871.016371881805,
        OBJECTID: 252
      }
    },
    {
      attributes: {
        EWZ: 193454,
        cases: 73685,
        deaths: 555,
        cases_per_100k: 38089.1581461226,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Passau',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 528.2909632264,
        OBJECTID: 253
      }
    },
    {
      attributes: {
        EWZ: 77313,
        cases: 31455,
        deaths: 251,
        cases_per_100k: 40685.266384696,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Regen',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 485.041325520934,
        OBJECTID: 254
      }
    },
    {
      attributes: {
        EWZ: 121800,
        cases: 47571,
        deaths: 342,
        cases_per_100k: 39056.6502463054,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Rottal-Inn',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 638.752052545156,
        OBJECTID: 255
      }
    },
    {
      attributes: {
        EWZ: 101745,
        cases: 40161,
        deaths: 192,
        cases_per_100k: 39472.2099366062,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Straubing-Bogen',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 936.655363899946,
        OBJECTID: 256
      }
    },
    {
      attributes: {
        EWZ: 97244,
        cases: 37196,
        deaths: 219,
        cases_per_100k: 38250.1748179836,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Dingolfing-Landau',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 607.749578380157,
        OBJECTID: 257
      }
    },
    {
      attributes: {
        EWZ: 42052,
        cases: 12693,
        deaths: 55,
        cases_per_100k: 30184.0578331589,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'SK Amberg',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 530.295824217635,
        OBJECTID: 258
      }
    },
    {
      attributes: {
        EWZ: 152270,
        cases: 51078,
        deaths: 157,
        cases_per_100k: 33544.3619885729,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'SK Regensburg',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 529.322913246207,
        OBJECTID: 259
      }
    },
    {
      attributes: {
        EWZ: 42535,
        cases: 14543,
        deaths: 112,
        cases_per_100k: 34190.666509933,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'SK Weiden i.d.OPf.',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 639.473374867756,
        OBJECTID: 260
      }
    },
    {
      attributes: {
        EWZ: 102998,
        cases: 31487,
        deaths: 215,
        cases_per_100k: 30570.4965144954,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Amberg-Sulzbach',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 629.138429872425,
        OBJECTID: 261
      }
    },
    {
      attributes: {
        EWZ: 128094,
        cases: 46366,
        deaths: 267,
        cases_per_100k: 36196.8554342904,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Cham',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 698.705638047059,
        OBJECTID: 262
      }
    },
    {
      attributes: {
        EWZ: 135225,
        cases: 44887,
        deaths: 242,
        cases_per_100k: 33194.3057866519,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Neumarkt i.d.OPf.',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1166.9439822518,
        OBJECTID: 263
      }
    },
    {
      attributes: {
        EWZ: 94645,
        cases: 34692,
        deaths: 222,
        cases_per_100k: 36654.8681916636,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Neustadt a.d.Waldnaab',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 812.509905436103,
        OBJECTID: 264
      }
    },
    {
      attributes: {
        EWZ: 194275,
        cases: 69894,
        deaths: 255,
        cases_per_100k: 35976.8369579205,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Regensburg',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 679.96396860121,
        OBJECTID: 265
      }
    },
    {
      attributes: {
        EWZ: 148477,
        cases: 52596,
        deaths: 276,
        cases_per_100k: 35423.6683122639,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Schwandorf',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 542.171514780067,
        OBJECTID: 266
      }
    },
    {
      attributes: {
        EWZ: 71696,
        cases: 25714,
        deaths: 301,
        cases_per_100k: 35865.3202410176,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Tirschenreuth',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 973.555010042401,
        OBJECTID: 267
      }
    },
    {
      attributes: {
        EWZ: 76674,
        cases: 22297,
        deaths: 146,
        cases_per_100k: 29080.2618879933,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'SK Bamberg',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 922.085713540444,
        OBJECTID: 268
      }
    },
    {
      attributes: {
        EWZ: 74048,
        cases: 23262,
        deaths: 160,
        cases_per_100k: 31414.7579948142,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'SK Bayreuth',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 606.363439930856,
        OBJECTID: 269
      }
    },
    {
      attributes: {
        EWZ: 40842,
        cases: 13822,
        deaths: 116,
        cases_per_100k: 33842.6129964252,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'SK Coburg',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1050.38930512708,
        OBJECTID: 270
      }
    },
    {
      attributes: {
        EWZ: 45173,
        cases: 16162,
        deaths: 163,
        cases_per_100k: 35778.0089876696,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'SK Hof',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 719.456312398999,
        OBJECTID: 271
      }
    },
    {
      attributes: {
        EWZ: 147497,
        cases: 53539,
        deaths: 236,
        cases_per_100k: 36298.3653904825,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Bamberg',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1141.04015674895,
        OBJECTID: 272
      }
    },
    {
      attributes: {
        EWZ: 103679,
        cases: 32915,
        deaths: 213,
        cases_per_100k: 31747.0268810463,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Bayreuth',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 943.296135186489,
        OBJECTID: 273
      }
    },
    {
      attributes: {
        EWZ: 86571,
        cases: 29403,
        deaths: 204,
        cases_per_100k: 33964.0295248986,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Coburg',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1226.73874623142,
        OBJECTID: 274
      }
    },
    {
      attributes: {
        EWZ: 116600,
        cases: 39265,
        deaths: 181,
        cases_per_100k: 33674.9571183533,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Forchheim',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 879.931389365352,
        OBJECTID: 275
      }
    },
    {
      attributes: {
        EWZ: 94522,
        cases: 31159,
        deaths: 245,
        cases_per_100k: 32964.8124246207,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Hof',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 849.53767376907,
        OBJECTID: 276
      }
    },
    {
      attributes: {
        EWZ: 66355,
        cases: 24309,
        deaths: 165,
        cases_per_100k: 36634.7675382413,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Kronach',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 950.945671011981,
        OBJECTID: 277
      }
    },
    {
      attributes: {
        EWZ: 71428,
        cases: 23619,
        deaths: 155,
        cases_per_100k: 33066.8645349163,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Kulmbach',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1113.00890407123,
        OBJECTID: 278
      }
    },
    {
      attributes: {
        EWZ: 66722,
        cases: 24563,
        deaths: 162,
        cases_per_100k: 36813.9444261263,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Lichtenfels',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1188.51353376697,
        OBJECTID: 279
      }
    },
    {
      attributes: {
        EWZ: 71974,
        cases: 24407,
        deaths: 252,
        cases_per_100k: 33910.8566982521,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Wunsiedel i.Fichtelgebirge',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 951.732570094756,
        OBJECTID: 280
      }
    },
    {
      attributes: {
        EWZ: 41681,
        cases: 13853,
        deaths: 62,
        cases_per_100k: 33235.7668961877,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'SK Ansbach',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 748.542501379525,
        OBJECTID: 281
      }
    },
    {
      attributes: {
        EWZ: 112385,
        cases: 29416,
        deaths: 131,
        cases_per_100k: 26174.3115184411,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'SK Erlangen',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 768.785870000445,
        OBJECTID: 282
      }
    },
    {
      attributes: {
        EWZ: 128223,
        cases: 42834,
        deaths: 306,
        cases_per_100k: 33405.8632226668,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'SK Fürth',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 806.407586782403,
        OBJECTID: 283
      }
    },
    {
      attributes: {
        EWZ: 515543,
        cases: 175083,
        deaths: 1211,
        cases_per_100k: 33960.8917199923,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'SK Nürnberg',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 633.11886690344,
        OBJECTID: 284
      }
    },
    {
      attributes: {
        EWZ: 41056,
        cases: 13336,
        deaths: 135,
        cases_per_100k: 32482.4629773967,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'SK Schwabach',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 850.058456742011,
        OBJECTID: 285
      }
    },
    {
      attributes: {
        EWZ: 185316,
        cases: 62989,
        deaths: 259,
        cases_per_100k: 33990.0494290833,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Ansbach',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 745.753199939563,
        OBJECTID: 286
      }
    },
    {
      attributes: {
        EWZ: 138105,
        cases: 43901,
        deaths: 178,
        cases_per_100k: 31788.1322182397,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Erlangen-Höchstadt',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1062.23525578364,
        OBJECTID: 287
      }
    },
    {
      attributes: {
        EWZ: 118695,
        cases: 37652,
        deaths: 273,
        cases_per_100k: 31721.6394961877,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Fürth',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1016.89203420532,
        OBJECTID: 288
      }
    },
    {
      attributes: {
        EWZ: 171143,
        cases: 52135,
        deaths: 276,
        cases_per_100k: 30462.8293298587,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Nürnberger Land',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 792.319872854864,
        OBJECTID: 289
      }
    },
    {
      attributes: {
        EWZ: 101272,
        cases: 32010,
        deaths: 148,
        cases_per_100k: 31607.9469152382,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Neustadt a.d.Aisch-Bad Windsheim',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1080.25910419464,
        OBJECTID: 290
      }
    },
    {
      attributes: {
        EWZ: 127168,
        cases: 42367,
        deaths: 228,
        cases_per_100k: 33315.7712632109,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Roth',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1038.78334172119,
        OBJECTID: 291
      }
    },
    {
      attributes: {
        EWZ: 95117,
        cases: 31995,
        deaths: 171,
        cases_per_100k: 33637.5201068158,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Weißenburg-Gunzenhausen',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 966.17849595761,
        OBJECTID: 292
      }
    },
    {
      attributes: {
        EWZ: 70858,
        cases: 22139,
        deaths: 160,
        cases_per_100k: 31244.1784978408,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'SK Aschaffenburg',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1018.93928702475,
        OBJECTID: 293
      }
    },
    {
      attributes: {
        EWZ: 53319,
        cases: 20187,
        deaths: 135,
        cases_per_100k: 37860.8000900242,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'SK Schweinfurt',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 858.980851103734,
        OBJECTID: 294
      }
    },
    {
      attributes: {
        EWZ: 126954,
        cases: 44398,
        deaths: 192,
        cases_per_100k: 34971.7220410542,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'SK Würzburg',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 894.812294216803,
        OBJECTID: 295
      }
    },
    {
      attributes: {
        EWZ: 174658,
        cases: 52174,
        deaths: 285,
        cases_per_100k: 29872.0928901052,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Aschaffenburg',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1086.69514136198,
        OBJECTID: 296
      }
    },
    {
      attributes: {
        EWZ: 103169,
        cases: 34513,
        deaths: 191,
        cases_per_100k: 33452.8782870824,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Bad Kissingen',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1104.98308600452,
        OBJECTID: 297
      }
    },
    {
      attributes: {
        EWZ: 79510,
        cases: 28533,
        deaths: 144,
        cases_per_100k: 35886.0520689221,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Rhön-Grabfeld',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 930.700540812476,
        OBJECTID: 298
      }
    },
    {
      attributes: {
        EWZ: 84275,
        cases: 31392,
        deaths: 146,
        cases_per_100k: 37249.4808662118,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Haßberge',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 843.66656778404,
        OBJECTID: 299
      }
    },
    {
      attributes: {
        EWZ: 91696,
        cases: 30127,
        deaths: 129,
        cases_per_100k: 32855.3044843832,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Kitzingen',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 950.968417379166,
        OBJECTID: 300
      }
    },
    {
      attributes: {
        EWZ: 128743,
        cases: 43280,
        deaths: 209,
        cases_per_100k: 33617.3617206372,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Miltenberg',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 919.661651507266,
        OBJECTID: 301
      }
    },
    {
      attributes: {
        EWZ: 125976,
        cases: 36363,
        deaths: 243,
        cases_per_100k: 28865.021908935,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Main-Spessart',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1243.09392265193,
        OBJECTID: 302
      }
    },
    {
      attributes: {
        EWZ: 115652,
        cases: 41907,
        deaths: 213,
        cases_per_100k: 36235.4304292187,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Schweinfurt',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1088.6106595649,
        OBJECTID: 303
      }
    },
    {
      attributes: {
        EWZ: 162697,
        cases: 51436,
        deaths: 135,
        cases_per_100k: 31614.5964584473,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Würzburg',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1094.67291959901,
        OBJECTID: 304
      }
    },
    {
      attributes: {
        EWZ: 295830,
        cases: 100743,
        deaths: 643,
        cases_per_100k: 34054.3555420343,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'SK Augsburg',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 691.951458607984,
        OBJECTID: 305
      }
    },
    {
      attributes: {
        EWZ: 44662,
        cases: 14838,
        deaths: 102,
        cases_per_100k: 33222.8740316152,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'SK Kaufbeuren',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 673.951009806995,
        OBJECTID: 306
      }
    },
    {
      attributes: {
        EWZ: 68940,
        cases: 24106,
        deaths: 88,
        cases_per_100k: 34966.6376559327,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'SK Kempten',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 703.51029881056,
        OBJECTID: 307
      }
    },
    {
      attributes: {
        EWZ: 44360,
        cases: 15479,
        deaths: 37,
        cases_per_100k: 34894.0486925158,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'SK Memmingen',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 764.201983769161,
        OBJECTID: 308
      }
    },
    {
      attributes: {
        EWZ: 135024,
        cases: 45716,
        deaths: 160,
        cases_per_100k: 33857.684559782,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Aichach-Friedberg',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 882.806019670577,
        OBJECTID: 309
      }
    },
    {
      attributes: {
        EWZ: 255900,
        cases: 84137,
        deaths: 401,
        cases_per_100k: 32878.8589292692,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Augsburg',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 623.681125439625,
        OBJECTID: 310
      }
    },
    {
      attributes: {
        EWZ: 97172,
        cases: 35215,
        deaths: 206,
        cases_per_100k: 36239.8633351171,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Dillingen a.d.Donau',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1211.25427077759,
        OBJECTID: 311
      }
    },
    {
      attributes: {
        EWZ: 127342,
        cases: 45153,
        deaths: 197,
        cases_per_100k: 35458.0578285248,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Günzburg',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 493.160151403308,
        OBJECTID: 312
      }
    },
    {
      attributes: {
        EWZ: 175823,
        cases: 56436,
        deaths: 247,
        cases_per_100k: 32098.1896566433,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Neu-Ulm',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 601.172770342902,
        OBJECTID: 313
      }
    },
    {
      attributes: {
        EWZ: 82085,
        cases: 27324,
        deaths: 100,
        cases_per_100k: 33287.445940184,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Lindau',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 739.477371017847,
        OBJECTID: 314
      }
    },
    {
      attributes: {
        EWZ: 141907,
        cases: 51024,
        deaths: 244,
        cases_per_100k: 35955.9429767383,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Ostallgäu',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 859.013297441282,
        OBJECTID: 315
      }
    },
    {
      attributes: {
        EWZ: 146164,
        cases: 53383,
        deaths: 250,
        cases_per_100k: 36522.673161654,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Unterallgäu',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 640.376563312444,
        OBJECTID: 316
      }
    },
    {
      attributes: {
        EWZ: 134324,
        cases: 48599,
        deaths: 243,
        cases_per_100k: 36180.4294094875,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Donau-Ries',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 975.99833239034,
        OBJECTID: 317
      }
    },
    {
      attributes: {
        EWZ: 156308,
        cases: 53047,
        deaths: 166,
        cases_per_100k: 33937.4824065307,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Oberallgäu',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 794.585050029429,
        OBJECTID: 318
      }
    },
    {
      attributes: {
        EWZ: 327502,
        cases: 94790,
        deaths: 693,
        cases_per_100k: 28943.3346971927,
        BL: 'Saarland',
        BL_ID: '10',
        county: 'LK Stadtverband Saarbrücken',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 820.147663220377,
        OBJECTID: 319
      }
    },
    {
      attributes: {
        EWZ: 103471,
        cases: 30574,
        deaths: 128,
        cases_per_100k: 29548.3758734331,
        BL: 'Saarland',
        BL_ID: '10',
        county: 'LK Merzig-Wadern',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1042.80426399668,
        OBJECTID: 320
      }
    },
    {
      attributes: {
        EWZ: 131172,
        cases: 37512,
        deaths: 201,
        cases_per_100k: 28597.5665538377,
        BL: 'Saarland',
        BL_ID: '10',
        county: 'LK Neunkirchen',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1086.35989387979,
        OBJECTID: 321
      }
    },
    {
      attributes: {
        EWZ: 193732,
        cases: 60375,
        deaths: 246,
        cases_per_100k: 31164.1855759503,
        BL: 'Saarland',
        BL_ID: '10',
        county: 'LK Saarlouis',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1001.8995313113,
        OBJECTID: 322
      }
    },
    {
      attributes: {
        EWZ: 141656,
        cases: 40611,
        deaths: 189,
        cases_per_100k: 28668.7468232902,
        BL: 'Saarland',
        BL_ID: '10',
        county: 'LK Saarpfalz-Kreis',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 947.365448692607,
        OBJECTID: 323
      }
    },
    {
      attributes: {
        EWZ: 86458,
        cases: 25103,
        deaths: 151,
        cases_per_100k: 29034.9071225335,
        BL: 'Saarland',
        BL_ID: '10',
        county: 'LK Sankt Wendel',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1332.43887205348,
        OBJECTID: 324
      }
    },
    {
      attributes: {
        EWZ: 72040,
        cases: 19263,
        deaths: 157,
        cases_per_100k: 26739.3114936147,
        BL: 'Brandenburg',
        BL_ID: '12',
        county: 'SK Brandenburg a.d.Havel',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 409.494725152693,
        OBJECTID: 326
      }
    },
    {
      attributes: {
        EWZ: 98693,
        cases: 34917,
        deaths: 288,
        cases_per_100k: 35379.408873983,
        BL: 'Brandenburg',
        BL_ID: '12',
        county: 'SK Cottbus',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 642.39611725249,
        OBJECTID: 327
      }
    },
    {
      attributes: {
        EWZ: 57015,
        cases: 16790,
        deaths: 190,
        cases_per_100k: 29448.3907743576,
        BL: 'Brandenburg',
        BL_ID: '12',
        county: 'SK Frankfurt (Oder)',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 505.130228887135,
        OBJECTID: 328
      }
    },
    {
      attributes: {
        EWZ: 182112,
        cases: 50560,
        deaths: 274,
        cases_per_100k: 27763.1347742049,
        BL: 'Brandenburg',
        BL_ID: '12',
        county: 'SK Potsdam',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 567.782463538921,
        OBJECTID: 329
      }
    },
    {
      attributes: {
        EWZ: 187343,
        cases: 46963,
        deaths: 348,
        cases_per_100k: 25067.9235413119,
        BL: 'Brandenburg',
        BL_ID: '12',
        county: 'LK Barnim',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 262.619900396599,
        OBJECTID: 330
      }
    },
    {
      attributes: {
        EWZ: 173316,
        cases: 51491,
        deaths: 388,
        cases_per_100k: 29709.3170855547,
        BL: 'Brandenburg',
        BL_ID: '12',
        county: 'LK Dahme-Spreewald',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 458.699716125459,
        OBJECTID: 331
      }
    },
    {
      attributes: {
        EWZ: 101085,
        cases: 35732,
        deaths: 389,
        cases_per_100k: 35348.4691101548,
        BL: 'Brandenburg',
        BL_ID: '12',
        county: 'LK Elbe-Elster',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 538.160953652866,
        OBJECTID: 332
      }
    },
    {
      attributes: {
        EWZ: 164693,
        cases: 41595,
        deaths: 260,
        cases_per_100k: 25256.0825293121,
        BL: 'Brandenburg',
        BL_ID: '12',
        county: 'LK Havelland',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 309.667077532136,
        OBJECTID: 333
      }
    },
    {
      attributes: {
        EWZ: 197195,
        cases: 54753,
        deaths: 375,
        cases_per_100k: 27765.9169857248,
        BL: 'Brandenburg',
        BL_ID: '12',
        county: 'LK Märkisch-Oderland',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 311.366921067978,
        OBJECTID: 334
      }
    },
    {
      attributes: {
        EWZ: 214234,
        cases: 58085,
        deaths: 400,
        cases_per_100k: 27112.8765742132,
        BL: 'Brandenburg',
        BL_ID: '12',
        county: 'LK Oberhavel',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 528.394185796839,
        OBJECTID: 335
      }
    },
    {
      attributes: {
        EWZ: 108396,
        cases: 37543,
        deaths: 382,
        cases_per_100k: 34635.0418834643,
        BL: 'Brandenburg',
        BL_ID: '12',
        county: 'LK Oberspreewald-Lausitz',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 386.54562899,
        OBJECTID: 336
      }
    },
    {
      attributes: {
        EWZ: 179276,
        cases: 55726,
        deaths: 458,
        cases_per_100k: 31083.9153037774,
        BL: 'Brandenburg',
        BL_ID: '12',
        county: 'LK Oder-Spree',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 480.822865302662,
        OBJECTID: 337
      }
    },
    {
      attributes: {
        EWZ: 98808,
        cases: 28468,
        deaths: 207,
        cases_per_100k: 28811.4322726905,
        BL: 'Brandenburg',
        BL_ID: '12',
        county: 'LK Ostprignitz-Ruppin',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 437.211561816857,
        OBJECTID: 338
      }
    },
    {
      attributes: {
        EWZ: 217954,
        cases: 60644,
        deaths: 280,
        cases_per_100k: 27824.2197894969,
        BL: 'Brandenburg',
        BL_ID: '12',
        county: 'LK Potsdam-Mittelmark',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 240.417702818026,
        OBJECTID: 339
      }
    },
    {
      attributes: {
        EWZ: 76096,
        cases: 24499,
        deaths: 231,
        cases_per_100k: 32194.8591253154,
        BL: 'Brandenburg',
        BL_ID: '12',
        county: 'LK Prignitz',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 616.326745164003,
        OBJECTID: 340
      }
    },
    {
      attributes: {
        EWZ: 113011,
        cases: 39589,
        deaths: 324,
        cases_per_100k: 35031.1031669483,
        BL: 'Brandenburg',
        BL_ID: '12',
        county: 'LK Spree-Neiße',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 592.862641689747,
        OBJECTID: 341
      }
    },
    {
      attributes: {
        EWZ: 171554,
        cases: 51271,
        deaths: 316,
        cases_per_100k: 29886.2165848654,
        BL: 'Brandenburg',
        BL_ID: '12',
        county: 'LK Teltow-Fläming',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 475.651981300349,
        OBJECTID: 342
      }
    },
    {
      attributes: {
        EWZ: 118250,
        cases: 33343,
        deaths: 247,
        cases_per_100k: 28197.0401691332,
        BL: 'Brandenburg',
        BL_ID: '12',
        county: 'LK Uckermark',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 375.475687103594,
        OBJECTID: 343
      }
    },
    {
      attributes: {
        EWZ: 209061,
        cases: 59691,
        deaths: 141,
        cases_per_100k: 28551.9537359909,
        BL: 'Mecklenburg-Vorpommern',
        BL_ID: '13',
        county: 'SK Rostock',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 809.811490426239,
        OBJECTID: 344
      }
    },
    {
      attributes: {
        EWZ: 95609,
        cases: 26923,
        deaths: 161,
        cases_per_100k: 28159.4828938698,
        BL: 'Mecklenburg-Vorpommern',
        BL_ID: '13',
        county: 'SK Schwerin',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 775.031639280821,
        OBJECTID: 345
      }
    },
    {
      attributes: {
        EWZ: 258057,
        cases: 57648,
        deaths: 231,
        cases_per_100k: 22339.2506306746,
        BL: 'Mecklenburg-Vorpommern',
        BL_ID: '13',
        county: 'LK Mecklenburgische Seenplatte',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 633.968464331524,
        OBJECTID: 346
      }
    },
    {
      attributes: {
        EWZ: 217072,
        cases: 67307,
        deaths: 308,
        cases_per_100k: 31006.7627331024,
        BL: 'Mecklenburg-Vorpommern',
        BL_ID: '13',
        county: 'LK Rostock',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 821.386452421316,
        OBJECTID: 347
      }
    },
    {
      attributes: {
        EWZ: 225383,
        cases: 61450,
        deaths: 259,
        cases_per_100k: 27264.7005319833,
        BL: 'Mecklenburg-Vorpommern',
        BL_ID: '13',
        county: 'LK Vorpommern-Rügen',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 618.946415656904,
        OBJECTID: 348
      }
    },
    {
      attributes: {
        EWZ: 157975,
        cases: 45543,
        deaths: 129,
        cases_per_100k: 28829.2451337237,
        BL: 'Mecklenburg-Vorpommern',
        BL_ID: '13',
        county: 'LK Nordwestmecklenburg',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 876.721000158253,
        OBJECTID: 349
      }
    },
    {
      attributes: {
        EWZ: 235773,
        cases: 70333,
        deaths: 495,
        cases_per_100k: 29830.8118402022,
        BL: 'Mecklenburg-Vorpommern',
        BL_ID: '13',
        county: 'LK Vorpommern-Greifswald',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 635.781026665479,
        OBJECTID: 350
      }
    },
    {
      attributes: {
        EWZ: 211844,
        cases: 64718,
        deaths: 403,
        cases_per_100k: 30549.8385604501,
        BL: 'Mecklenburg-Vorpommern',
        BL_ID: '13',
        county: 'LK Ludwigslust-Parchim',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 887.917524215933,
        OBJECTID: 351
      }
    },
    {
      attributes: {
        EWZ: 244401,
        cases: 77888,
        deaths: 826,
        cases_per_100k: 31868.9367064783,
        BL: 'Sachsen',
        BL_ID: '14',
        county: 'SK Chemnitz',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 446.806682460383,
        OBJECTID: 352
      }
    },
    {
      attributes: {
        EWZ: 331917,
        cases: 126743,
        deaths: 1622,
        cases_per_100k: 38185.1486968128,
        BL: 'Sachsen',
        BL_ID: '14',
        county: 'LK Erzgebirgskreis',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 270.248284962807,
        OBJECTID: 353
      }
    },
    {
      attributes: {
        EWZ: 301474,
        cases: 107682,
        deaths: 1001,
        cases_per_100k: 35718.5030881602,
        BL: 'Sachsen',
        BL_ID: '14',
        county: 'LK Mittelsachsen',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 380.795690507307,
        OBJECTID: 354
      }
    },
    {
      attributes: {
        EWZ: 223905,
        cases: 78936,
        deaths: 1215,
        cases_per_100k: 35254.2372881356,
        BL: 'Sachsen',
        BL_ID: '14',
        county: 'LK Vogtlandkreis',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 564.525133427123,
        OBJECTID: 355
      }
    },
    {
      attributes: {
        EWZ: 312033,
        cases: 108813,
        deaths: 1480,
        cases_per_100k: 34872.2731249579,
        BL: 'Sachsen',
        BL_ID: '14',
        county: 'LK Zwickau',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 357.654478853198,
        OBJECTID: 356
      }
    },
    {
      attributes: {
        EWZ: 556227,
        cases: 198946,
        deaths: 1676,
        cases_per_100k: 35767.0519410241,
        BL: 'Sachsen',
        BL_ID: '14',
        county: 'SK Dresden',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 578.181210189365,
        OBJECTID: 357
      }
    },
    {
      attributes: {
        EWZ: 298010,
        cases: 116692,
        deaths: 1396,
        cases_per_100k: 39157.0752659307,
        BL: 'Sachsen',
        BL_ID: '14',
        county: 'LK Bautzen',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 449.649340626154,
        OBJECTID: 358
      }
    },
    {
      attributes: {
        EWZ: 250558,
        cases: 86098,
        deaths: 1598,
        cases_per_100k: 34362.5028935416,
        BL: 'Sachsen',
        BL_ID: '14',
        county: 'LK Görlitz',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 328.067752775804,
        OBJECTID: 359
      }
    },
    {
      attributes: {
        EWZ: 240371,
        cases: 89240,
        deaths: 949,
        cases_per_100k: 37125.942813401,
        BL: 'Sachsen',
        BL_ID: '14',
        county: 'LK Meißen',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 492.987922835949,
        OBJECTID: 360
      }
    },
    {
      attributes: {
        EWZ: 244722,
        cases: 97559,
        deaths: 1427,
        cases_per_100k: 39865.2348378977,
        BL: 'Sachsen',
        BL_ID: '14',
        county: 'LK Sächsische Schweiz-Osterzgebirge',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 599.455708926864,
        OBJECTID: 361
      }
    },
    {
      attributes: {
        EWZ: 597493,
        cases: 183924,
        deaths: 775,
        cases_per_100k: 30782.6200474315,
        BL: 'Sachsen',
        BL_ID: '14',
        county: 'SK Leipzig',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 732.560883558469,
        OBJECTID: 362
      }
    },
    {
      attributes: {
        EWZ: 258386,
        cases: 90562,
        deaths: 526,
        cases_per_100k: 35049.1125680184,
        BL: 'Sachsen',
        BL_ID: '14',
        county: 'LK Leipzig',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 615.745435124194,
        OBJECTID: 363
      }
    },
    {
      attributes: {
        EWZ: 197444,
        cases: 68121,
        deaths: 612,
        cases_per_100k: 34501.4282530743,
        BL: 'Sachsen',
        BL_ID: '14',
        county: 'LK Nordsachsen',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 555.600575353011,
        OBJECTID: 364
      }
    },
    {
      attributes: {
        EWZ: 79354,
        cases: 22368,
        deaths: 153,
        cases_per_100k: 28187.6149910527,
        BL: 'Sachsen-Anhalt',
        BL_ID: '15',
        county: 'SK Dessau-Roßlau',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 593.542858583058,
        OBJECTID: 365
      }
    },
    {
      attributes: {
        EWZ: 237865,
        cases: 70702,
        deaths: 557,
        cases_per_100k: 29723.5827044752,
        BL: 'Sachsen-Anhalt',
        BL_ID: '15',
        county: 'SK Halle',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 794.568347592122,
        OBJECTID: 366
      }
    },
    {
      attributes: {
        EWZ: 235775,
        cases: 59731,
        deaths: 214,
        cases_per_100k: 25333.8988442371,
        BL: 'Sachsen-Anhalt',
        BL_ID: '15',
        county: 'SK Magdeburg',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 578.941787721345,
        OBJECTID: 367
      }
    },
    {
      attributes: {
        EWZ: 82687,
        cases: 25478,
        deaths: 141,
        cases_per_100k: 30812.5823890092,
        BL: 'Sachsen-Anhalt',
        BL_ID: '15',
        county: 'LK Altmarkkreis Salzwedel',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 663.949593043646,
        OBJECTID: 368
      }
    },
    {
      attributes: {
        EWZ: 157217,
        cases: 49235,
        deaths: 370,
        cases_per_100k: 31316.5879007995,
        BL: 'Sachsen-Anhalt',
        BL_ID: '15',
        county: 'LK Anhalt-Bitterfeld',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 506.306569900202,
        OBJECTID: 369
      }
    },
    {
      attributes: {
        EWZ: 170567,
        cases: 54070,
        deaths: 208,
        cases_per_100k: 31700.1530190482,
        BL: 'Sachsen-Anhalt',
        BL_ID: '15',
        county: 'LK Börde',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 589.211277679739,
        OBJECTID: 370
      }
    },
    {
      attributes: {
        EWZ: 177590,
        cases: 60931,
        deaths: 850,
        cases_per_100k: 34309.9273607748,
        BL: 'Sachsen-Anhalt',
        BL_ID: '15',
        county: 'LK Burgenlandkreis',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1079.45267188468,
        OBJECTID: 371
      }
    },
    {
      attributes: {
        EWZ: 210975,
        cases: 65531,
        deaths: 473,
        cases_per_100k: 31061.026187937,
        BL: 'Sachsen-Anhalt',
        BL_ID: '15',
        county: 'LK Harz',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 575.897618201209,
        OBJECTID: 372
      }
    },
    {
      attributes: {
        EWZ: 89403,
        cases: 27441,
        deaths: 201,
        cases_per_100k: 30693.6008858763,
        BL: 'Sachsen-Anhalt',
        BL_ID: '15',
        county: 'LK Jerichower Land',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 549.198572754829,
        OBJECTID: 373
      }
    },
    {
      attributes: {
        EWZ: 133690,
        cases: 43479,
        deaths: 342,
        cases_per_100k: 32522.2529732964,
        BL: 'Sachsen-Anhalt',
        BL_ID: '15',
        county: 'LK Mansfeld-Südharz',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 508.639389632732,
        OBJECTID: 374
      }
    },
    {
      attributes: {
        EWZ: 183434,
        cases: 62501,
        deaths: 553,
        cases_per_100k: 34072.7455106469,
        BL: 'Sachsen-Anhalt',
        BL_ID: '15',
        county: 'LK Saalekreis',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 606.757743929697,
        OBJECTID: 375
      }
    },
    {
      attributes: {
        EWZ: 187457,
        cases: 56448,
        deaths: 435,
        cases_per_100k: 30112.5058013304,
        BL: 'Sachsen-Anhalt',
        BL_ID: '15',
        county: 'LK Salzlandkreis',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 483.31083928581,
        OBJECTID: 376
      }
    },
    {
      attributes: {
        EWZ: 110485,
        cases: 32251,
        deaths: 268,
        cases_per_100k: 29190.3878354528,
        BL: 'Sachsen-Anhalt',
        BL_ID: '15',
        county: 'LK Stendal',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 471.557224962665,
        OBJECTID: 377
      }
    },
    {
      attributes: {
        EWZ: 124185,
        cases: 38706,
        deaths: 412,
        cases_per_100k: 31168.0154608044,
        BL: 'Sachsen-Anhalt',
        BL_ID: '15',
        county: 'LK Wittenberg',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 362.362604179249,
        OBJECTID: 378
      }
    },
    {
      attributes: {
        EWZ: 213692,
        cases: 61556,
        deaths: 470,
        cases_per_100k: 28805.9450049604,
        BL: 'Thüringen',
        BL_ID: '16',
        county: 'SK Erfurt',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1102.05342268311,
        OBJECTID: 379
      }
    },
    {
      attributes: {
        EWZ: 92126,
        cases: 27853,
        deaths: 348,
        cases_per_100k: 30233.5931224627,
        BL: 'Thüringen',
        BL_ID: '16',
        county: 'SK Gera',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 253.999956581204,
        OBJECTID: 380
      }
    },
    {
      attributes: {
        EWZ: 110731,
        cases: 33328,
        deaths: 140,
        cases_per_100k: 30098.1658252883,
        BL: 'Thüringen',
        BL_ID: '16',
        county: 'SK Jena',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 614.100838970117,
        OBJECTID: 381
      }
    },
    {
      attributes: {
        EWZ: 36395,
        cases: 9923,
        deaths: 173,
        cases_per_100k: 27264.7341667812,
        BL: 'Thüringen',
        BL_ID: '16',
        county: 'SK Suhl',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 453.358977881577,
        OBJECTID: 382
      }
    },
    {
      attributes: {
        EWZ: 65098,
        cases: 20647,
        deaths: 149,
        cases_per_100k: 31716.7962149375,
        BL: 'Thüringen',
        BL_ID: '16',
        county: 'SK Weimar',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 565.301545362377,
        OBJECTID: 383
      }
    },
    {
      attributes: {
        EWZ: 99463,
        cases: 34105,
        deaths: 328,
        cases_per_100k: 34289.1326422891,
        BL: 'Thüringen',
        BL_ID: '16',
        county: 'LK Eichsfeld',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 499.683299317334,
        OBJECTID: 385
      }
    },
    {
      attributes: {
        EWZ: 82456,
        cases: 23302,
        deaths: 101,
        cases_per_100k: 28259.9204424178,
        BL: 'Thüringen',
        BL_ID: '16',
        county: 'LK Nordhausen',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 249.830212476957,
        OBJECTID: 386
      }
    },
    {
      attributes: {
        EWZ: 159937,
        cases: 48339,
        deaths: 437,
        cases_per_100k: 30223.7756116471,
        BL: 'Thüringen',
        BL_ID: '16',
        county: 'LK Wartburgkreis',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 412.037239663117,
        OBJECTID: 387
      }
    },
    {
      attributes: {
        EWZ: 101698,
        cases: 32672,
        deaths: 397,
        cases_per_100k: 32126.4921630711,
        BL: 'Thüringen',
        BL_ID: '16',
        county: 'LK Unstrut-Hainich-Kreis',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 550.64996361777,
        OBJECTID: 388
      }
    },
    {
      attributes: {
        EWZ: 73522,
        cases: 21406,
        deaths: 236,
        cases_per_100k: 29115.094801556,
        BL: 'Thüringen',
        BL_ID: '16',
        county: 'LK Kyffhäuserkreis',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 384.918799815021,
        OBJECTID: 389
      }
    },
    {
      attributes: {
        EWZ: 124241,
        cases: 41948,
        deaths: 643,
        cases_per_100k: 33763.4114342286,
        BL: 'Thüringen',
        BL_ID: '16',
        county: 'LK Schmalkalden-Meiningen',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 544.103798263053,
        OBJECTID: 390
      }
    },
    {
      attributes: {
        EWZ: 134563,
        cases: 41649,
        deaths: 326,
        cases_per_100k: 30951.3016208022,
        BL: 'Thüringen',
        BL_ID: '16',
        county: 'LK Gotha',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 401.299019789987,
        OBJECTID: 391
      }
    },
    {
      attributes: {
        EWZ: 69107,
        cases: 22390,
        deaths: 227,
        cases_per_100k: 32399.0333830147,
        BL: 'Thüringen',
        BL_ID: '16',
        county: 'LK Sömmerda',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 186.667052541711,
        OBJECTID: 392
      }
    },
    {
      attributes: {
        EWZ: 62656,
        cases: 22628,
        deaths: 396,
        cases_per_100k: 36114.657814096,
        BL: 'Thüringen',
        BL_ID: '16',
        county: 'LK Hildburghausen',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 533.069458631256,
        OBJECTID: 393
      }
    },
    {
      attributes: {
        EWZ: 105606,
        cases: 36160,
        deaths: 421,
        cases_per_100k: 34240.4787606765,
        BL: 'Thüringen',
        BL_ID: '16',
        county: 'LK Ilm-Kreis',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 693.142435088915,
        OBJECTID: 394
      }
    },
    {
      attributes: {
        EWZ: 82291,
        cases: 26115,
        deaths: 129,
        cases_per_100k: 31734.9406374938,
        BL: 'Thüringen',
        BL_ID: '16',
        county: 'LK Weimarer Land',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 366.990314858247,
        OBJECTID: 395
      }
    },
    {
      attributes: {
        EWZ: 57044,
        cases: 19515,
        deaths: 284,
        cases_per_100k: 34210.4340509081,
        BL: 'Thüringen',
        BL_ID: '16',
        county: 'LK Sonneberg',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 504.873431035692,
        OBJECTID: 396
      }
    },
    {
      attributes: {
        EWZ: 102139,
        cases: 34679,
        deaths: 522,
        cases_per_100k: 33952.7506633118,
        BL: 'Thüringen',
        BL_ID: '16',
        county: 'LK Saalfeld-Rudolstadt',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 343.64934060447,
        OBJECTID: 397
      }
    },
    {
      attributes: {
        EWZ: 82816,
        cases: 29008,
        deaths: 217,
        cases_per_100k: 35027.0479134467,
        BL: 'Thüringen',
        BL_ID: '16',
        county: 'LK Saale-Holzland-Kreis',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 428.661128284389,
        OBJECTID: 398
      }
    },
    {
      attributes: {
        EWZ: 79632,
        cases: 28641,
        deaths: 314,
        cases_per_100k: 35966.6968053044,
        BL: 'Thüringen',
        BL_ID: '16',
        county: 'LK Saale-Orla-Kreis',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 296.363271046815,
        OBJECTID: 399
      }
    },
    {
      attributes: {
        EWZ: 96668,
        cases: 28321,
        deaths: 339,
        cases_per_100k: 29297.182107833,
        BL: 'Thüringen',
        BL_ID: '16',
        county: 'LK Greiz',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 1599.28828567882,
        OBJECTID: 400
      }
    },
    {
      attributes: {
        EWZ: 88356,
        cases: 30192,
        deaths: 423,
        cases_per_100k: 34170.8542713568,
        BL: 'Thüringen',
        BL_ID: '16',
        county: 'LK Altenburger Land',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 425.551179320024,
        OBJECTID: 401
      }
    },
    {
      attributes: {
        EWZ: 259720,
        cases: 66854,
        deaths: 386,
        cases_per_100k: 25740.797782227,
        BL: 'Berlin',
        BL_ID: '11',
        county: 'SK Berlin Reinickendorf',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 314.954566456184,
        OBJECTID: 404
      }
    },
    {
      attributes: {
        EWZ: 316223,
        cases: 78936,
        deaths: 367,
        cases_per_100k: 24962.1311542804,
        BL: 'Berlin',
        BL_ID: '11',
        county: 'SK Berlin Charlottenburg-Wilmersdorf',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 295.993650050755,
        OBJECTID: 405
      }
    },
    {
      attributes: {
        EWZ: 272992,
        cases: 66960,
        deaths: 302,
        cases_per_100k: 24528.1913023092,
        BL: 'Berlin',
        BL_ID: '11',
        county: 'SK Berlin Treptow-Köpenick',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 337.738834837651,
        OBJECTID: 406
      }
    },
    {
      attributes: {
        EWZ: 404187,
        cases: 109458,
        deaths: 283,
        cases_per_100k: 27081.029325535,
        BL: 'Berlin',
        BL_ID: '11',
        county: 'SK Berlin Pankow',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 413.175089748062,
        OBJECTID: 407
      }
    },
    {
      attributes: {
        EWZ: 318509,
        cases: 94477,
        deaths: 519,
        cases_per_100k: 29662.2701399333,
        BL: 'Berlin',
        BL_ID: '11',
        county: 'SK Berlin Neukölln',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 248.344630763966,
        OBJECTID: 408
      }
    },
    {
      attributes: {
        EWZ: 292005,
        cases: 70473,
        deaths: 324,
        cases_per_100k: 24134.1757846612,
        BL: 'Berlin',
        BL_ID: '11',
        county: 'SK Berlin Lichtenberg',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 259.927056043561,
        OBJECTID: 409
      }
    },
    {
      attributes: {
        EWZ: 274076,
        cases: 61435,
        deaths: 328,
        cases_per_100k: 22415.3154599454,
        BL: 'Berlin',
        BL_ID: '11',
        county: 'SK Berlin Marzahn-Hellersdorf',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 517.00988047111,
        OBJECTID: 410
      }
    },
    {
      attributes: {
        EWZ: 239374,
        cases: 65661,
        deaths: 313,
        cases_per_100k: 27430.2973589446,
        BL: 'Berlin',
        BL_ID: '11',
        county: 'SK Berlin Spandau',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 253.578082832722,
        OBJECTID: 411
      }
    },
    {
      attributes: {
        EWZ: 291915,
        cases: 68506,
        deaths: 470,
        cases_per_100k: 23467.7902814175,
        BL: 'Berlin',
        BL_ID: '11',
        county: 'SK Berlin Steglitz-Zehlendorf',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 396.005686586849,
        OBJECTID: 412
      }
    },
    {
      attributes: {
        EWZ: 374581,
        cases: 113181,
        deaths: 402,
        cases_per_100k: 30215.3606296102,
        BL: 'Berlin',
        BL_ID: '11',
        county: 'SK Berlin Mitte',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 370.280393292772,
        OBJECTID: 413
      }
    },
    {
      attributes: {
        EWZ: 279210,
        cases: 88281,
        deaths: 200,
        cases_per_100k: 31618.1368862147,
        BL: 'Berlin',
        BL_ID: '11',
        county: 'SK Berlin Friedrichshain-Kreuzberg',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 369.256115468644,
        OBJECTID: 414
      }
    },
    {
      attributes: {
        EWZ: 341296,
        cases: 89363,
        deaths: 558,
        cases_per_100k: 26183.4302189302,
        BL: 'Berlin',
        BL_ID: '11',
        county: 'SK Berlin Tempelhof-Schöneberg',
        last_update: '21.04.2022, 00:00 Uhr',
        cases7_per_100k: 396.430078289813,
        OBJECTID: 415
      }
    }
  ]
}
