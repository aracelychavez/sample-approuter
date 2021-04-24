sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ordersapp/test/integration/pages/MainListReport' ,
        'ordersapp/test/integration/pages/MainObjectPage',
        'ordersapp/test/integration/OpaJourney'
    ],
    function(JourneyRunner, MainListReport, MainObjectPage, Journey) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ordersapp') + '/index.html'
        });

        
        JourneyRunner.run(
            {
                pages: { onTheMainPage: MainListReport, onTheDetailPage: MainObjectPage }
            },
            Journey.run
        );
        
    }
);