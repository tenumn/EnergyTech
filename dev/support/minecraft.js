Callback.addCallback("PreLoaded",function(){
    // 化学反应台
    Decomposer.addRecipeLiquid("milk" ,1,{Ca:4,oleicAcid:1});
    Decomposer.addRecipeLiquid("water",1,{H:2,O:1});

    Decomposer.addRecipeLiquidSelect("lava",0.25,[{Si:1,O:1},{Fe:1,O:1},{Mg:1,O:1},{Ti:1,O:1},{Pb:1,O:1},{Na:1,Cl:1},],0.2);
    
    Decomposer.addRecipeSelect(1  ,0 ,[{Si:1,O:1},{Fe:1,O:1},{Mg:1,O:1},{Ti:1,O:1},{Pb:1,O:1},{Zn:1,O:1},{Al:1,O:1}],0.2);
    Decomposer.addRecipeSelect(2  ,-1,[{Si:1,O:1},{Fe:1,O:1},{Mg:1,O:1},{Ti:1,O:1},{Pb:1,O:1},{Zn:1,O:1},{Ga:1,As:1}],0.07);
    Decomposer.addRecipeSelect(3  ,-1,[{Si:1,O:1},{Fe:1,O:1},{Mg:1,O:1},{Ti:1,O:1},{Pb:1,O:1},{Zn:1,O:1},{Ga:1,As:1}],0.07);
    Decomposer.addRecipeSelect(243,-1,[{Si:1,O:1},{Fe:1,O:1},{Mg:1,O:1},{Ti:1,O:1},{Pb:1,O:1},{Zn:1,O:1},{Ga:1,As:1}],0.07);
    Decomposer.addRecipeSelect(4  ,-1,[{Si:1,O:1},{Fe:1,O:1},{Mg:1,O:1},{Ti:1,O:1},{Pb:1,O:1},{Na:1,Cl:1}],0.1);
    
    Decomposer.addRecipe(5  ,-1,{cellulose:2},0.4);
    Decomposer.addRecipe(158,-1,{cellulose:2},0.4);
    Decomposer.addRecipe(6  ,-1,{cellulose:1},0.25);
    Decomposer.addRecipe(12 ,-1,{siliconDioxide:16});
    Decomposer.addRecipe(123,-1,{siliconDioxide:1},0.35);
    Decomposer.addRecipe(14 ,-1,{Au:48});
    Decomposer.addRecipe(15 ,-1,{Fe:48});
    Decomposer.addRecipe(16 ,-1,{C:48});
    Decomposer.addRecipe(17 ,-1,{cellulose:8},0.5);
    Decomposer.addRecipe(162,-1,{cellulose:8},0.5);
    Decomposer.addRecipe(18 ,-1,{cellulose:4},0.5);
    Decomposer.addRecipe(161,-1,{cellulose:4},0.5);
    Decomposer.addRecipe(351, 0,{blackPigment:1});
    Decomposer.addRecipe(351, 1,{redPigment:1});
    Decomposer.addRecipe(351, 2,{greenPigment:1});
    Decomposer.addRecipe(351, 3,{theobromine:1,tannicacid:1},0.4);
    Decomposer.addRecipe(351, 4,{lazurite:1});
    Decomposer.addRecipe(351, 5,{purplePigment:1});
    Decomposer.addRecipe(351, 6,{lightbluePigment:1,whitePigment:1});
    Decomposer.addRecipe(351, 7,{whitePigment:1,blackPigment:1});
    Decomposer.addRecipe(351, 8,{whitePigment:1,blackPigment:2});
    Decomposer.addRecipe(351, 9,{redPigment:1,whitePigment:1});
    Decomposer.addRecipe(351,10,{limePigment:1});
    Decomposer.addRecipe(351,11,{yellowPigment:1});
    Decomposer.addRecipe(351,12,{lightbluePigment:1});
    Decomposer.addRecipe(351,13,{lightbluePigment:1,redPigment:1});
    Decomposer.addRecipe(351,14,{orangePigment:1});
    Decomposer.addRecipe(351,15,{whitePigment:1});
    Decomposer.addRecipe(20 ,-1,{siliconDioxide:16});
    Decomposer.addRecipe(102,-1,{siliconDioxide:6});
    Decomposer.addRecipe(21 ,-1,{lazurite:6,sodalite:1,noselite:1,calciumCarbonate:1,pyrite:1});
    Decomposer.addRecipe(22 ,-1,{lazurite:9});
    Decomposer.addRecipe(30 ,-1,{fibroin:1});
    Decomposer.addRecipe(175,-1,{shikimicAcid:2},0.3);
    Decomposer.addRecipe(24 ,-1,{siliconDioxide:16});
    Decomposer.addRecipe(35 , 0,{glycine:2,whitePigment:1},0.6);
    Decomposer.addRecipe(35 , 1,{glycine:2,orangePigment:1},0.6);
    Decomposer.addRecipe(35 , 2,{glycine:2,lightbluePigment:1,redPigment:1},0.6);
    Decomposer.addRecipe(35 , 3,{glycine:2,lightbluePigment:1},0.6);
    Decomposer.addRecipe(35 , 4,{glycine:2,yellowPigment:1},0.6);
    Decomposer.addRecipe(35 , 5,{glycine:2,limePigment:1},0.6);
    Decomposer.addRecipe(35 , 6,{glycine:2,redPigment:1,whitePigment:1},0.6);
    Decomposer.addRecipe(35 , 7,{glycine:2,whitePigment:1,blackPigment:2},0.6);
    Decomposer.addRecipe(35 , 8,{glycine:2,whitePigment:1,blackPigment:1},0.6);
    Decomposer.addRecipe(35 , 9,{glycine:2,lightbluePigment:1,whitePigment:1},0.6);
    Decomposer.addRecipe(35 ,10,{glycine:2,purplePigment:1},0.6);
    Decomposer.addRecipe(35 ,11,{glycine:2,lazurite:1},0.6);
    Decomposer.addRecipe(35 ,12,{glycine:2,tannicacid:1},0.6);
    Decomposer.addRecipe(35 ,13,{glycine:2,greenPigment:1},0.6);
    Decomposer.addRecipe(35 ,14,{glycine:2,redPigment:1},0.6);
    Decomposer.addRecipe(35 ,15,{glycine:2,blackPigment:1},0.6);
    Decomposer.addRecipe(171, 0,{glycine:2,whitePigment:1},0.4);
    Decomposer.addRecipe(171, 1,{glycine:2,orangePigment:1},0.4);
    Decomposer.addRecipe(171, 2,{glycine:2,lightbluePigment:1,redPigment:1},0.4);
    Decomposer.addRecipe(171, 3,{glycine:2,lightbluePigment:1},0.2);
    Decomposer.addRecipe(171, 4,{glycine:2,yellowPigment:1},0.4);
    Decomposer.addRecipe(171, 5,{glycine:2,limePigment:1},0.4);
    Decomposer.addRecipe(171, 6,{glycine:2,redPigment:1,whitePigment:1},0.4);
    Decomposer.addRecipe(171, 7,{glycine:2,whitePigment:1,blackPigment:2},0.4);
    Decomposer.addRecipe(171, 8,{glycine:2,whitePigment:1,blackPigment:1},0.4);
    Decomposer.addRecipe(171, 9,{glycine:2,lightbluePigment:1,whitePigment:1},0.4);
    Decomposer.addRecipe(171,10,{glycine:2,purplePigment:1},0.4);
    Decomposer.addRecipe(171,11,{glycine:2,lazurite:1},0.4);
    Decomposer.addRecipe(171,12,{glycine:2,tannicacid:1},0.4);
    Decomposer.addRecipe(171,13,{glycine:2,greenPigment:1},0.4);
    Decomposer.addRecipe(171,14,{glycine:2,redPigment:1},0.4);
    Decomposer.addRecipe(171,15,{glycine:2,blackPigment:1},0.4);
    Decomposer.addRecipe(37 ,-1,{shikimicAcid:2,yellowPigment:1},0.3);
    Decomposer.addRecipe(38 , 0,{shikimicAcid:2,redPigment:1},0.3);
    Decomposer.addRecipe(38 , 1,{shikimicAcid:2,lazurite:1},0.3);
    Decomposer.addRecipe(38 , 2,{shikimicAcid:2,purplePigment:1},0.3);
    Decomposer.addRecipe(38 , 3,{shikimicAcid:2,whitePigment:1},0.3);
    Decomposer.addRecipe(38 , 4,{shikimicAcid:2,redPigment:1},0.3);
    Decomposer.addRecipe(38 , 5,{shikimicAcid:2,orangePigment:1},0.3);
    Decomposer.addRecipe(38 , 6,{shikimicAcid:2,whitePigment:1},0.3);
    Decomposer.addRecipe(38 , 7,{shikimicAcid:2,whitePigment:1},0.3);
    Decomposer.addRecipe(38 , 8,{shikimicAcid:2,whitePigment:1},0.3);
    Decomposer.addRecipe(39 ,-1,{psilocybin:1,water:2});
    Decomposer.addRecipe(40 ,-1,{pantherine:1,water:2});
    Decomposer.addRecipe(41 ,-1,{Au:144});
    Decomposer.addRecipe(42 ,-1,{Fe:144});
    Decomposer.addRecipe(46 ,-1,{trinitrotoluene:1});
    Decomposer.addRecipe(49 ,-1,{siliconDioxide:16,magnesiumOxide:8});
    Decomposer.addRecipe(56 ,-1,{fullrene:6});
    Decomposer.addRecipe(57 ,-1,{fullrene:27});
    Decomposer.addRecipe(72 ,-1,{cellulose:4},0.4);
    Decomposer.addRecipe(73 ,-1,{iron3oxide:9,Cu:9},0.8);
    Decomposer.addRecipe(81 ,-1,{mescaline:1,water:20});
    Decomposer.addRecipe(86 ,-1,{cucurbitacin:1});
    Decomposer.addRecipe(361,-1,{water:1});
    
    Decomposer.addRecipeSelect(87 ,-1,[{Si:2,O:1,Fe:1},{Si:2,Ni:1,Tc:1},{Si:3,Ti:1,Fe:1},{Si:1,W:4,Cr:2},{Si:10,W:1,Zn:8,Be:4}],0.1);
    Decomposer.addRecipeSelect(112,-1,[{Si:2,C:1,Fe:1},{Si:2,Ni:1,Tc:1},{Si:3,Ti:1,Fe:1},{Si:1,W:4,Cr:2},{Si:10,W:1,Zn:8,Be:4}],0.15);
    
    Decomposer.addRecipe(373, 0,{water:5,siliconDioxide:16});
    Decomposer.addRecipe(79 ,-1,{water:8});
    
    Decomposer.addRecipeSelect(88,-1,[{Pb:3,Be:1,Si:2,O:1},{Pb:1,Si:5,O:2},{Si:2,O:1},{Si:6,O:2},{Es:1,O:2}],0.2);
    
    Decomposer.addRecipe(89 ,-1,{P:4});
    Decomposer.addRecipe(110,-1,{fingolimod:1},0.09);
    
    Decomposer.addRecipeSelect(121,-1,[{Si:2,O:1,H:4,Li:1},{Es:1},{Pu:1},{Fr:1},{Nd:1},{Si:2,O:4},{H:4},{B:8},{Li:2},{Zr:1},{Na:1},{Rb:1},{Ga:1,As:1}],0.8);
    
    Decomposer.addRecipe(129,-1,{beryl:6,Cr:6,V:6});
    Decomposer.addRecipe(133,-1,{beryl:18,Cr:18,V:18});
    Decomposer.addRecipe(260,-1,{malicAcid:1});
    Decomposer.addRecipe(262,-1,{Si:1,O:2,N:6});
    Decomposer.addRecipe(263, 0,{C:8},0.92);
    Decomposer.addRecipe(263, 1,{C:8},0.82);
    Decomposer.addRecipe(173,-1,{C:72},0.82);
    Decomposer.addRecipe(264,-1,{fullrene:3});
    Decomposer.addRecipe(265,-1,{Fe:16});
    Decomposer.addRecipe(266,-1,{Au:16});
    Decomposer.addRecipe(280,-1,{cellulose:1},0.3);
    Decomposer.addRecipe(287,-1,{serine:1,glycine:1,alinine:1},0.45);
    Decomposer.addRecipe(288,-1,{water:8,N:6});
    Decomposer.addRecipe(289,-1,{potassiumNitrate:1,S:2,C:1});
    Decomposer.addRecipe(297,-1,{starch:1,sucrose:1},0.1);
    Decomposer.addRecipe(318,-1,{siliconDioxide:1},0.5);
    Decomposer.addRecipe(322,-1,{malicAcid:1,Au:64});
    Decomposer.addRecipe(324,-1,{cellulose:12},0.4);
    Decomposer.addRecipe(427,-1,{cellulose:12},0.4);
    Decomposer.addRecipe(428,-1,{cellulose:12},0.4);
    Decomposer.addRecipe(429,-1,{cellulose:12},0.4);
    Decomposer.addRecipe(430,-1,{cellulose:12},0.4);
    Decomposer.addRecipe(431,-1,{cellulose:12},0.4);
    Decomposer.addRecipe(325, 0,{Fe:48});
    Decomposer.addRecipe(325, 8,{water:16,Fe:48});
    Decomposer.addRecipe(331,-1,{iron3oxide:1,Cu:1},0.42);
    Decomposer.addRecipe(152,-1,{iron3oxide:9,Cu:9},0.42);
    Decomposer.addRecipe(332,-1,{water:1});
    Decomposer.addRecipe(334,-1,{keratin:1},0.2);
    Decomposer.addRecipe(336,-1,{kaolinite:1},0.5);
    Decomposer.addRecipe(337,-1,{kaolinite:1},0.5);
    Decomposer.addRecipe(338,-1,{sucrose:1,H:2,O:1},0.65);
    Decomposer.addRecipe(106,-1,{cellulose:6});
    Decomposer.addRecipe(339,-1,{cellulose:1},0.35);
    
    Decomposer.addRecipeSelect(345,-1,[{Fe:64},{Fe:64,iron3oxide:1},{Fe:64,iron3oxide:1,Cu:1},{Fe:64,Cu:1}]);
    Decomposer.addRecipeSelect(341,-1,[{pmma:1},{Hg:1},{water:10}],0.9);
    
    Decomposer.addRecipe(348,-1,{P:1});
    Decomposer.addRecipe(352,-1,{hydroxylapatite:1});
    Decomposer.addRecipe(353,-1,{sucrose:1},0.75);
    Decomposer.addRecipe(360,-1,{water:1});
    Decomposer.addRecipe(103,-1,{cucurbitacin:1,asparticAcid:1,water:16});
    Decomposer.addRecipe(366,-1,{K:1,Na:1,C:2});
    Decomposer.addRecipe(350,-1,{nodularin:1},0.05);
    Decomposer.addRecipe(368,-1,{Es:1,calciumCarbonate:8});
    Decomposer.addRecipe(122,-1,{calciumCarbonate:16,hydroxylapatite:6,Pu:18,Fm:8});
    Decomposer.addRecipe(369,-1,{Pu:6});
    Decomposer.addRecipe(377,-1,{Pu:1});
    Decomposer.addRecipe(370,-1,{Yb:4,No:4});
    Decomposer.addRecipe(372,-1,{cocainehc:1},0.5);
    Decomposer.addRecipe(375,-1,{tetrodotoxin:1},0.2);
    Decomposer.addRecipe(376,-1,{Po:1,ethanol:1});
    Decomposer.addRecipe(378,-1,{Hg:1,Pu:1,pmma:3});
    Decomposer.addRecipe(382,-1,{water:4,whitePigment:1,Au:1});
    Decomposer.addRecipe(388,-1,{beryl:2,Cr:2,V:2});
    Decomposer.addRecipe(295,-1,{cellulose:2},0.3);
    Decomposer.addRecipe(391,-1,{retinol:1});
    Decomposer.addRecipe(392,-1,{water:8,K:2,cellulose:1},0.4);
    Decomposer.addRecipe(396,-1,{retinol:1,Au:4});
    Decomposer.addRecipe(399,-1,{He:256,C:64,Cn:16,H:192});
    Decomposer.addRecipe(406,-1,{siliconDioxide:4,galliumarsenide:1});
    Decomposer.addRecipe(101,-1,{Fe:6});
    
    // 化合反应台
    Synthesizer.addRecipe({id:1  ,count:16,data:0},[["Si",1],["O",2],null,["Al",2],["O",3]],true);
    Synthesizer.addRecipe({id:2  ,count:16,data:0},[null,["cellulose",1],null,null,["O",2],["Si",1]],true);
    Synthesizer.addRecipe({id:3  ,count:1 ,data:0},[["siliconDioxide",1]],true);
    Synthesizer.addRecipe({id:243,count:1 ,data:0},[null,null,null,["siliconDioxide",1]],true);
    Synthesizer.addRecipe({id:4  ,count:16,data:0},[["Si",2],["O",4]],true);
    Synthesizer.addRecipe({id:5  ,count:1 ,data:0},[null,null,null,null,null,null,null,["cellulose",1],["cellulose",1]],true);
    Synthesizer.addRecipe({id:5  ,count:1 ,data:1},[null,null,null,null,null,null,["cellulose",1],["cellulose",1]],true);
    Synthesizer.addRecipe({id:5  ,count:1 ,data:2},[null,null,null,null,null,["cellulose",1],["cellulose",1]],true);
    Synthesizer.addRecipe({id:5  ,count:1 ,data:3},[null,null,null,null,["cellulose",1],["cellulose",1]],true);
    Synthesizer.addRecipe({id:5  ,count:1 ,data:4},[null,null,null,["cellulose",1],["cellulose",1]],true);
    Synthesizer.addRecipe({id:5  ,count:1 ,data:5},[null,null,["cellulose",1],["cellulose",1]],true);
    Synthesizer.addRecipe({id:158,count:1 ,data:0},[null,null,null,null,null,null,["cellulose",1],null,["cellulose",1]],true);
    Synthesizer.addRecipe({id:158,count:1 ,data:1},[null,null,null,null,null,["cellulose",1],null,["cellulose",1]],true);
    Synthesizer.addRecipe({id:158,count:1 ,data:2},[null,null,null,null,["cellulose",1],null,["cellulose",1]],true);
    Synthesizer.addRecipe({id:158,count:1 ,data:3},[null,null,null,["cellulose",1],null,["cellulose",1]],true);
    Synthesizer.addRecipe({id:158,count:1 ,data:4},[null,null,["cellulose",1],null,["cellulose",1]],true);
    Synthesizer.addRecipe({id:158,count:1 ,data:5},[null,["cellulose",1],null,["cellulose",1]],true);
    Synthesizer.addRecipe({id:6  ,count:1 ,data:0},[null,null,null,null,null,null,null,null,["cellulose",1]],true);
    Synthesizer.addRecipe({id:6  ,count:1 ,data:1},[null,null,null,null,null,null,null,["cellulose",1]],true);
    Synthesizer.addRecipe({id:6  ,count:1 ,data:2},[null,null,null,null,null,null,["cellulose",1]],true);
    Synthesizer.addRecipe({id:6  ,count:1 ,data:3},[null,null,null,null,null,["cellulose",1]],true);
    Synthesizer.addRecipe({id:6  ,count:1 ,data:4},[null,null,null,null,["cellulose",1]],true);
    Synthesizer.addRecipe({id:6  ,count:1 ,data:5},[null,null,null,["cellulose",1]],true);
    Synthesizer.addRecipe({id:12 ,count:1 ,data:0},[["siliconDioxide",4],["siliconDioxide",4],null,["siliconDioxide",4],["siliconDioxide",4]],true);
    Synthesizer.addRecipe({id:12 ,count:1 ,data:1},[null,["siliconDioxide",4],["siliconDioxide",4],null,["siliconDioxide",4],["siliconDioxide",4]],true);
    Synthesizer.addRecipe({id:13 ,count:1 ,data:0},[null,null,null,null,null,null,null,null,["siliconDioxide",1]],true);
    Synthesizer.addRecipe({id:17 ,count:1 ,data:0},[["cellulose",2],["cellulose",2],["cellulose",2],null,["cellulose",2]],true);
    Synthesizer.addRecipe({id:17 ,count:1 ,data:1},[null,null,null,null,["cellulose",2],null,["cellulose",2],["cellulose",2],["cellulose",2]],true);
    Synthesizer.addRecipe({id:17 ,count:1 ,data:2},[["cellulose",2],null,["cellulose",2],null,null,null,["cellulose",2],null,["cellulose",2]],true);
    Synthesizer.addRecipe({id:17 ,count:1 ,data:3},[["cellulose",2],null,null,["cellulose",2],["cellulose",2],null,["cellulose",2]],true);
    Synthesizer.addRecipe({id:162,count:1 ,data:0},[null,null,["cellulose",2],null,["cellulose",2],["cellulose",2],null,null,["cellulose",2]],true);
    Synthesizer.addRecipe({id:162,count:1 ,data:1},[null,["cellulose",2],null,["cellulose",2],null,["cellulose",2],null,["cellulose",2]],true);
    Synthesizer.addRecipe({id:18 ,count:1 ,data:0},[["cellulose",1],["cellulose",1],["cellulose",1],null,["cellulose",1]],true);
    Synthesizer.addRecipe({id:18 ,count:1 ,data:1},[null,null,null,null,["cellulose",1],null,["cellulose",1],["cellulose",1],["cellulose",1]],true);
    Synthesizer.addRecipe({id:18 ,count:1 ,data:2},[["cellulose",1],null,["cellulose",1],null,null,null,["cellulose",1],null,["cellulose",1]],true);
    Synthesizer.addRecipe({id:18 ,count:1 ,data:3},[["cellulose",1],null,null,["cellulose",1],["cellulose",1],null,["cellulose",1]],true);
    Synthesizer.addRecipe({id:161,count:1 ,data:0},[null,null,["cellulose",1],null,["cellulose",1],["cellulose",1],null,null,["cellulose",1]],true);
    Synthesizer.addRecipe({id:161,count:1 ,data:1},[null,["cellulose",1],null,["cellulose",1],null,["cellulose",1],null,["cellulose",1]],true);
    Synthesizer.addRecipe({id:351,count:1 ,data:0},[["blackPigment",1]]);
    Synthesizer.addRecipe({id:351,count:1 ,data:1},[["redPigment",1]]);
    Synthesizer.addRecipe({id:351,count:1 ,data:2},[["greenPigment",1]]);
    Synthesizer.addRecipe({id:351,count:1 ,data:3},[["theobromine",1]]);
    Synthesizer.addRecipe({id:351,count:1 ,data:4},[["lazurite",1]]);
    Synthesizer.addRecipe({id:351,count:1 ,data:5},[["purplePigment",1]]);
    Synthesizer.addRecipe({id:351,count:1 ,data:6},[["lightbluePigment",1],["whitePigment",1]]);
    Synthesizer.addRecipe({id:351,count:1 ,data:7},[["whitePigment",1],["blackPigment",1]]);
    Synthesizer.addRecipe({id:351,count:1 ,data:8},[["whitePigment",1],["blackPigment",2]]);
    Synthesizer.addRecipe({id:351,count:1 ,data:9},[["redPigment",1],["whitePigment",1]]);
    Synthesizer.addRecipe({id:351,count:1 ,data:10},[["limePigment",1]]);
    Synthesizer.addRecipe({id:351,count:1 ,data:11},[["yellowPigment",1]]);
    Synthesizer.addRecipe({id:351,count:1 ,data:12},[["lightbluePigment",1]]);
    Synthesizer.addRecipe({id:351,count:1 ,data:13},[["lightbluePigment",1],["redPigment",1]]);
    Synthesizer.addRecipe({id:351,count:1 ,data:14},[["orangePigment",1]]);
    Synthesizer.addRecipe({id:351,count:1 ,data:15},[["whitePigment",1]]);
    Synthesizer.addRecipe({id:20 ,count:1 ,data:0},[["siliconDioxide",4],null,["siliconDioxide",4],null,null,null,["siliconDioxide",4],null,["siliconDioxide",4]],true);
    Synthesizer.addRecipe({id:102,count:1 ,data:0},[["siliconDioxide",1],["siliconDioxide",1],["siliconDioxide",1],null,null,null,["siliconDioxide",1],["siliconDioxide",1],["siliconDioxide",1]],true);
    Synthesizer.addRecipe({id:22 ,count:1 ,data:0},[["lazurite",9]],true);
    Synthesizer.addRecipe({id:175,count:1 ,data:0},[["shikimicAcid",2],["yellowPigment",1]],true);
    Synthesizer.addRecipe({id:175,count:1 ,data:1},[["shikimicAcid",2],["redPigment",1],["whitePigment",2]],true);
    Synthesizer.addRecipe({id:175,count:1 ,data:2},[["shikimicAcid",2]],true);
    Synthesizer.addRecipe({id:175,count:1 ,data:3},[null,["shikimicAcid",2]],true);
    Synthesizer.addRecipe({id:175,count:1 ,data:4},[["shikimicAcid",2],["redPigment",1]],true);
    Synthesizer.addRecipe({id:175,count:1 ,data:5},[["shikimicAcid",2],["redPigment",1],["whitePigment",1]],true);
    Synthesizer.addRecipe({id:24 ,count:1 ,data:0},[null,null,null,null,["siliconDioxide",16]],true);
    Synthesizer.addRecipe({id:24 ,count:1 ,data:1},[null,null,null,null,null,null,null,["siliconDioxide",16]],true);
    Synthesizer.addRecipe({id:24 ,count:1 ,data:2},[null,["siliconDioxide",16]],true);
    Synthesizer.addRecipe({id:35 ,count:1 ,data:0},[["glycine",2],["whitePigment",1]]);
    Synthesizer.addRecipe({id:35 ,count:1 ,data:1},[["glycine",2],["orangePigment",1]]);
    Synthesizer.addRecipe({id:35 ,count:1 ,data:2},[["glycine",2],["lightbluePigment",1],["redPigment",1]]);
    Synthesizer.addRecipe({id:35 ,count:1 ,data:3},[["glycine",2],["lightbluePigment",1]]);
    Synthesizer.addRecipe({id:35 ,count:1 ,data:4},[["glycine",2],["yellowPigment",1]]);
    Synthesizer.addRecipe({id:35 ,count:1 ,data:5},[["glycine",2],["limePigment",1]]);
    Synthesizer.addRecipe({id:35 ,count:1 ,data:6},[["glycine",2],["redPigment",1],["whitePigment",1]]);
    Synthesizer.addRecipe({id:35 ,count:1 ,data:7},[["glycine",2],["whitePigment",1],["blackPigment",2]]);
    Synthesizer.addRecipe({id:35 ,count:1 ,data:8},[["glycine",2],["whitePigment",1],["blackPigment",1]]);
    Synthesizer.addRecipe({id:35 ,count:1 ,data:9},[["glycine",2],["lightbluePigment",1],["whitePigment",1]]);
    Synthesizer.addRecipe({id:35 ,count:1 ,data:10},[["glycine",2],["purplePigment",1]]);
    Synthesizer.addRecipe({id:35 ,count:1 ,data:11},[["glycine",2],["lazurite",1]]);
    Synthesizer.addRecipe({id:35 ,count:1 ,data:12},[["glycine",2],["tannicacid",1]]);
    Synthesizer.addRecipe({id:35 ,count:1 ,data:13},[["glycine",2],["greenPigment",1]]);
    Synthesizer.addRecipe({id:35 ,count:1 ,data:14},[["glycine",2],["redPigment",1]]);
    Synthesizer.addRecipe({id:35 ,count:1 ,data:15},[["glycine",2],["blackPigment",1]]);
    Synthesizer.addRecipe({id:171,count:1 ,data:0},[["glycine",1],["whitePigment",1]]);
    Synthesizer.addRecipe({id:171,count:1 ,data:1},[["glycine",1],["orangePigment",1]]);
    Synthesizer.addRecipe({id:171,count:1 ,data:2},[["glycine",1],["lightbluePigment",1],["redPigment",1]]);
    Synthesizer.addRecipe({id:171,count:1 ,data:3},[["glycine",1],["lightbluePigment",1]]);
    Synthesizer.addRecipe({id:171,count:1 ,data:4},[["glycine",1],["yellowPigment",1]]);
    Synthesizer.addRecipe({id:171,count:1 ,data:5},[["glycine",1],["limePigment",1]]);
    Synthesizer.addRecipe({id:171,count:1 ,data:6},[["glycine",1],["redPigment",1],["whitePigment",1]]);
    Synthesizer.addRecipe({id:171,count:1 ,data:7},[["glycine",1],["whitePigment",1],["blackPigment",2]]);
    Synthesizer.addRecipe({id:171,count:1 ,data:8},[["glycine",1],["whitePigment",1],["blackPigment",1]]);
    Synthesizer.addRecipe({id:171,count:1 ,data:9},[["glycine",1],["lightbluePigment",1],["whitePigment",1]]);
    Synthesizer.addRecipe({id:171,count:1 ,data:10},[["glycine",1],["purplePigment",1]]);
    Synthesizer.addRecipe({id:171,count:1 ,data:11},[["glycine",1],["lazurite",1]]);
    Synthesizer.addRecipe({id:171,count:1 ,data:12},[["glycine",1],["tannicacid",1]]);
    Synthesizer.addRecipe({id:171,count:1 ,data:13},[["glycine",1],["greenPigment",1]]);
    Synthesizer.addRecipe({id:171,count:1 ,data:14},[["glycine",1],["redPigment",1]]);
    Synthesizer.addRecipe({id:171,count:1 ,data:15},[["glycine",1],["blackPigment",1]]);
    Synthesizer.addRecipe({id:41 ,count:1 ,data:0},[["Au",16],["Au",16],["Au",16],["Au",16],["Au",16],["Au",16],["Au",16],["Au",16],["Au",16]],true);
    Synthesizer.addRecipe({id:42 ,count:1 ,data:0},[["Fe",16],["Fe",16],["Fe",16],["Fe",16],["Fe",16],["Fe",16],["Fe",16],["Fe",16],["Fe",16]],true);
    Synthesizer.addRecipe({id:46 ,count:1 ,data:0},[["trinitrotoluene",1]]);
    Synthesizer.addRecipe({id:49 ,count:1 ,data:0},[["siliconDioxide",4],["siliconDioxide",4],["siliconDioxide",4],["magnesiumOxide",2],null,["siliconDioxide",4],["magnesiumOxide",2],["magnesiumOxide",2],["magnesiumOxide",2]],true);
    Synthesizer.addRecipe({id:57 ,count:1 ,data:0},[["fullrene",3],["fullrene",3],["fullrene",3],["fullrene",3],["fullrene",3],["fullrene",3],["fullrene",3],["fullrene",3],["fullrene",3]],true);
    Synthesizer.addRecipe({id:81 ,count:1 ,data:0},[["water",5],null,["water",5],null,["mescaline",1],null,["water",5],null,["water",5]],true);
    Synthesizer.addRecipe({id:86 ,count:1 ,data:0},[["cucurbitacin",1]]);
    Synthesizer.addRecipe({id:405,count:1 ,data:0},[["Si",2],["Si",2],null,["Zn",2],["W",1],null,["Be",2],["Be",2]],true);
    Synthesizer.addRecipe({id:373,count:1 ,data:0},[null,["siliconDioxide",4],null,["siliconDioxide",4],["water",5],["siliconDioxide",4],null,["siliconDioxide",4]],true);
    Synthesizer.addRecipe({id:89 ,count:1 ,data:0},[["P",1],null,["P",1],["P",1],null,["P",1]],true);
    Synthesizer.addRecipe({id:110,count:16,data:0},[["fingolimod",1]]);
    Synthesizer.addRecipe({id:133,count:1 ,data:0},[["Cr",3],["Cr",3],["Cr",3],["V",9],["beryl",18],["V",9],["Cr",3],["Cr",3],["Cr",3]],true);
    Synthesizer.addRecipe({id:260,count:1 ,data:0},[["malicAcid",1],["water",2]]);
    Synthesizer.addRecipe({id:263,count:1 ,data:1},[["C",4],["C",4]]);
    Synthesizer.addRecipe({id:264,count:1 ,data:0},[null,["fullrene",1],null,["fullrene",1],null,["fullrene",1],null,["fullrene",1]],true);
    Synthesizer.addRecipe({id:265,count:1 ,data:0},[["Fe",16]]);
    Synthesizer.addRecipe({id:266,count:1 ,data:0},[["Au",16]]);
    Synthesizer.addRecipe({id:287,count:1 ,data:0},[["serine",1],["glycine",1],["alinine",1]],true);
    Synthesizer.addRecipe({id:288,count:1 ,data:0},[["N",1],["water",2],["N",1],["N",1],["water",1],["N",1],["N",1],["water",5],["N",1]],true);
    Synthesizer.addRecipe({id:289,count:1 ,data:0},[["potassiumNitrate",1],["C",1],null,["S",2]],true);
    Synthesizer.addRecipe({id:318,count:1 ,data:0},[null,["siliconDioxide",4],null,["siliconDioxide",4],["siliconDioxide",4],["siliconDioxide",4]],true);
    Synthesizer.addRecipe({id:325,count:1 ,data:0},[null,null,null,["Fe",16],null,["Fe",16],null,["Fe",16]],true);
    Synthesizer.addRecipe({id:325,count:1 ,data:8},[null,null,null,["Fe",16],["water",16],["Fe",16],null,["Fe",16]],true);
    Synthesizer.addRecipe({id:331,count:1 ,data:0},[null,null,["iron3oxide",1],null,["Cu",1]],true);
    Synthesizer.addRecipe({id:152,count:1 ,data:0},[null,null,["iron3oxide",9],null,["Cu",9]],true);
    Synthesizer.addRecipe({id:332,count:5 ,data:0},[["water",1],null,["water",1],null,["water",1],null,["water",1],null,["water",1]],true);
    Synthesizer.addRecipe({id:334,count:5 ,data:0},[null,null,null,null,["keratin",1]],true);
    Synthesizer.addRecipe({id:336,count:8 ,data:0},[["kaolinite",1],["kaolinite",1],null,["kaolinite",1],["kaolinite",1]],true);
    Synthesizer.addRecipe({id:337,count:2 ,data:0},[["kaolinite",1]]);
    Synthesizer.addRecipe({id:106,count:1 ,data:0},[["cellulose",1],null,["cellulose",1],["cellulose",1],null,["cellulose",1],["cellulose",1],null,["cellulose",1]],true);
    Synthesizer.addRecipe({id:339,count:8 ,data:0},[null,["cellulose",1],null,null,["cellulose",1],null,null,["cellulose",1]],true);
    Synthesizer.addRecipe({id:352,count:1 ,data:0},[["hydroxylapatite",1]]);
    Synthesizer.addRecipe({id:353,count:1 ,data:0},[["sucrose",1]]);
    Synthesizer.addRecipe({id:360,count:1 ,data:0},[["cucurbitacin",1],["asparticAcid",1],["water",1]]);
    Synthesizer.addRecipe({id:103,count:1 ,data:0},[["cucurbitacin",1],["asparticAcid",1],["water",16]]);
    Synthesizer.addRecipe({id:366,count:1 ,data:0},[["K",16],["Na",16],["C",16]],true);
    Synthesizer.addRecipe({id:368,count:1 ,data:0},[["calciumCarbonate",1],["calciumCarbonate",1],["calciumCarbonate",1],["calciumCarbonate",1],["Es",1],["calciumCarbonate",1],["calciumCarbonate",1],["calciumCarbonate",1],["calciumCarbonate",1]],true);
    Synthesizer.addRecipe({id:122,count:1 ,data:0},[["calciumCarbonate",18],["hydroxylapatite",8],["Pu",22],["Fm",12]],true);
    Synthesizer.addRecipe({id:369,count:1 ,data:0},[["Pu",2],null,null,["Pu",2],null,null,["Pu",2]],true);
    Synthesizer.addRecipe({id:370,count:1 ,data:0},[["Yb",1],["Yb",1],["No",1],null,["Yb",2],["No",2],null,["No",1]],true);
    Synthesizer.addRecipe({id:375,count:1 ,data:0},[["C",1],null,null,null,["tetrodotoxin",1],null,null,null,["C",1]],true);
    Synthesizer.addRecipe({id:378,count:1 ,data:0},[null,["Pu",1],null,["pmma",1],["Hg",1],["pmma",1],null,["pmma",1]],true);
    Synthesizer.addRecipe({id:399,count:1 ,data:0},[["He",64],["He",64],["He",64],["C",64],["Cn",16],["He",64],["H",64],["H",64],["H",64]],true);
    Synthesizer.addRecipe({id:101,count:1 ,data:0},[["Fe",6]]);

    // 种植机
    Recipe.addFarmingStationRecipe({id:6,data:0},[{id:17,count:4,data:0},{id:6,count:1,data:0},{id:260,count:1,data:0}],{id:3,data:0});
    Recipe.addFarmingStationRecipe({id:6,data:1},[{id:17,count:4,data:1},{id:6,count:1,data:1}],{id:3,data:0});
    Recipe.addFarmingStationRecipe({id:6,data:2},[{id:17,count:4,data:2},{id:6,count:1,data:2}],{id:3,data:0});
    Recipe.addFarmingStationRecipe({id:6,data:3},[{id:17,count:4,data:3},{id:6,count:1,data:3}],{id:3,data:0});
    Recipe.addFarmingStationRecipe({id:6,data:4},[{id:162,count:4,data:0},{id:6,count:1,data:4}],{id:3,data:0});
    Recipe.addFarmingStationRecipe({id:6,data:5},[{id:162,count:4,data:1},{id:6,count:1,data:5}],{id:3,data:0});
    Recipe.addFarmingStationRecipe({id:81,data:0},[{id:81,count:2,data:0}],{id:12,data:-1});
    Recipe.addFarmingStationRecipe({id:83,data:0},[{id:83,count:2,data:0}],{id:12,data:-1});
    Recipe.addFarmingStationRecipe({id:295,data:0},[{id:296,count:1,data:0},{id:295,count:1,data:0}],{id:3,data:0});
    Recipe.addFarmingStationRecipe({id:361,data:0},[{id:86,count:1,data:0}],{id:3,data:0});
    Recipe.addFarmingStationRecipe({id:362,data:0},[{id:103,count:1,data:0}],{id:3,data:0});
    Recipe.addFarmingStationRecipe({id:372,data:0},[{id:372,count:2,data:0}],{id:88,data:0});
    Recipe.addFarmingStationRecipe({id:391,data:0},[{id:391,count:1,data:0}],{id:3,data:0});
    Recipe.addFarmingStationRecipe({id:392,data:0},[{id:392,count:1,data:0},{id:394,count:1,data:0}],{id:3,data:0});
    Recipe.addFarmingStationRecipe({id:435,data:0},[{id:434,count:1,data:0},{id:435,count:1,data:0}],{id:3,data:0});
    
    // 切割机
    Recipe.addCuttingRecipe({id:17 ,count:1,data:0},{id:5,count:6,data:0});
    Recipe.addCuttingRecipe({id:17 ,count:1,data:1},{id:5,count:6,data:1});
    Recipe.addCuttingRecipe({id:17 ,count:1,data:2},{id:5,count:6,data:2});
    Recipe.addCuttingRecipe({id:17 ,count:1,data:3},{id:5,count:6,data:3});
    Recipe.addCuttingRecipe({id:162,count:1,data:0},{id:5,count:6,data:4});
    Recipe.addCuttingRecipe({id:162,count:1,data:1},{id:5,count:6,data:5});

    Recipe.addCuttingRecipe({id:5,count:1,data:0},{id:158,count:2,data:0});
    Recipe.addCuttingRecipe({id:5,count:1,data:1},{id:158,count:2,data:1});
    Recipe.addCuttingRecipe({id:5,count:1,data:2},{id:158,count:2,data:2});
    Recipe.addCuttingRecipe({id:5,count:1,data:3},{id:158,count:2,data:3});
    Recipe.addCuttingRecipe({id:5,count:1,data:4},{id:158,count:2,data:4});
    Recipe.addCuttingRecipe({id:5,count:1,data:5},{id:158,count:2,data:5});

    // 锤子
    Tool.setHammerDestroyDrop(15,BlockID.gravelIron,1,0);
    Tool.setHammerDestroyDrop(14,BlockID.gravelGold,1,0);
    
    // 高压釜
    Recipe.addAutoclaveRecipe({id:ItemID.dustEnder  ,count:1,data:0},{id:368,count:1,data:0});
    Recipe.addAutoclaveRecipe({id:ItemID.dustDiamond,count:1,data:0},{id:264,count:1,data:0});

    // 删除配方
    wheat.recipe.deleteRecipeFor([
        {id:325,count:1,data:0},
        {id:380,count:1,data:0},
        {id:410,count:1,data:0},
        {id:267,count:1,data:0},
        {id:256,count:1,data:0},
        {id:257,count:1,data:0},
        {id:258,count:1,data:0},
        {id:292,count:1,data:0},
        {id:283,count:1,data:0},
        {id:284,count:1,data:0},
        {id:285,count:1,data:0},
        {id:286,count:1,data:0},
        {id:294,count:1,data:0},
        {id:276,count:1,data:0},
        {id:277,count:1,data:0},
        {id:278,count:1,data:0},
        {id:279,count:1,data:0},
        {id:293,count:1,data:0}
    ]);

    Recipes.removeFurnaceRecipe(12);

    // 合成
    Recipes.addShaped({id:287,count:2,data:0},["aa","aa"],["a",ItemID.cotton,0]);
    var file = Tool.getAllTool("File"),hammer = Tool.getAllTool("Hammer");
    for(let hi = 0;hi < hammer.length;hi++){
        Recipe.addShapedRecipe({id:325,count:1,data:0},["   ","aba"," a "],["a",ItemID.plateIron,0,"b",hammer[hi],-1],{4:1});
        Recipe.addShapedRecipe({id:380,count:1,data:0},["a a","aba","aaa"],["a",ItemID.plateIron,0,"b",hammer[hi],-1],{4:1});
        Recipe.addShapedRecipe({id:410,count:1,data:0},["aca","aba"," a "],["a",ItemID.plateIron,0,"b",54,0,"c",hammer[hi],-1],{1:1});
        for(let fi = 0;fi < file.length;fi++){
            Recipe.addShapedRecipe({id:267,count:1,data:0},["cad"," a "," b "],["a",ItemID.plateIron,0,"b",280,0,"c",file[fi],-1,"d",hammer[hi],-1],{0:1,2:1});
            Recipe.addShapedRecipe({id:256,count:1,data:0},["cad"," b "," b "],["a",ItemID.plateIron,0,"b",280,0,"c",file[fi],-1,"d",hammer[hi],-1],{0:1,2:1});
            Recipe.addShapedRecipe({id:257,count:1,data:0},["aca","dbe"," b "],["a",ItemID.plateIron,0,"b",280,0,"c",265,0,"d",file[fi],-1,"e",hammer[hi],-1],{3:1,5:1});
            Recipe.addShapedRecipe({id:258,count:1,data:0},["acd","abe"," b "],["a",ItemID.plateIron,0,"b",280,0,"c",265,0,"d",file[fi],-1,"e",hammer[hi],-1],{2:1,5:1});
            Recipe.addShapedRecipe({id:292,count:1,data:0},["aac","db "," b "],["a",ItemID.plateIron,0,"b",280,0,"c",file[fi],-1,"d",hammer[hi],-1],{2:1,3:1});

            Recipe.addShapedRecipe({id:283,count:1,data:0},["cad"," a "," b "],["a",ItemID.plateGold,0,"b",280,0,"c",file[fi],-1,"d",hammer[hi],-1],{0:1,2:1});
            Recipe.addShapedRecipe({id:284,count:1,data:0},["cad"," b "," b "],["a",ItemID.plateGold,0,"b",280,0,"c",file[fi],-1,"d",hammer[hi],-1],{0:1,2:1});
            Recipe.addShapedRecipe({id:285,count:1,data:0},["aca","dbe"," b "],["a",ItemID.plateGold,0,"b",280,0,"c",266,0,"d",file[fi],-1,"e",hammer[hi],-1],{3:1,5:1});
            Recipe.addShapedRecipe({id:286,count:1,data:0},["acd","abe"," b "],["a",ItemID.plateGold,0,"b",280,0,"c",266,0,"d",file[fi],-1,"e",hammer[hi],-1],{2:1,5:1});
            Recipe.addShapedRecipe({id:294,count:1,data:0},["aac","db "," b "],["a",ItemID.plateGold,0,"b",280,0,"c",file[fi],-1,"d",hammer[hi],-1],{2:1,3:1});

            Recipe.addShapedRecipe({id:276,count:1,data:0},["cad"," a "," b "],["a",ItemID.plateDiamond,0,"b",280,0,"c",file[fi],-1,"d",hammer[hi],-1],{0:1,2:1});
            Recipe.addShapedRecipe({id:277,count:1,data:0},["cad"," b "," b "],["a",ItemID.plateDiamond,0,"b",280,0,"c",file[fi],-1,"d",hammer[hi],-1],{0:1,2:1});
            Recipe.addShapedRecipe({id:278,count:1,data:0},["aca","dbe"," b "],["a",ItemID.plateDiamond,0,"b",280,0,"c",264,0,"d",file[fi],-1,"e",hammer[hi],-1],{3:1,5:1});
            Recipe.addShapedRecipe({id:279,count:1,data:0},["acd","abe"," b "],["a",ItemID.plateDiamond,0,"b",280,0,"c",264,0,"d",file[fi],-1,"e",hammer[hi],-1],{2:1,5:1});
            Recipe.addShapedRecipe({id:293,count:1,data:0},["aac","db "," b "],["a",ItemID.plateDiamond,0,"b",280,0,"c",file[fi],-1,"d",hammer[hi],-1],{2:1,3:1});
        }
    }
});