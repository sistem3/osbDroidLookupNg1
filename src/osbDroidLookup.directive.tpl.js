angular.module('osb-droid-lookup-template', ['osbDroidLookup.tpl.html']);

angular.module("osbDroidLookup.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("osbDroidLookup.tpl.html",
    "<div class=\"starWarsLookup row\">\n" +
    "    <section ng-if=\"starWarsLookup.modal.open\" class=\"starWarsLookup--modal\">\n" +
    "      <div class=\"starWarsLookup--modal--content\">\n" +
    "        <div ng-click=\"starWarsLookup.modal.closeModal()\" class=\"starWarsLookup--modal--closeBtn\"><i class=\"fa fa-close\"></i></div>\n" +
    "        <div class=\"col-md-12\">\n" +
    "          <div class=\"pull-left col-md-4 starwarslookup--modal--contentThumb\">\n" +
    "            <img ng-src=\"{{starWarsLookup.modal.modalThumb}}\" class=\"img-rounded img-thumbnail\">\n" +
    "          </div>\n" +
    "          <h2 ng-bind-html=\"starWarsLookup.modal.modalContent.title\" class=\"col-md-8 pull-left\"></h2>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-8\">\n" +
    "          <div class=\"clearfix\"></div>\n" +
    "          <p ng-bind-html=\"starWarsLookup.modal.modalContent.extract\"></p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </section>\n" +
    "\n" +
    "    <section class=\"container\">\n" +
    "        <h1 class=\"headerstyle\"><i class=\"icon-trooper\"></i> Are these the Droids you are looking for?</h1>\n" +
    "        <div class=\"row starWarsLookup--main__nav\" ng-if=\"!starWarsLookup.sectionLoaded\">\n" +
    "            <ul class=\"list-unstyled\">\n" +
    "                <li ng-repeat=\"sections in starWarsLookup.sections\" class=\"col-xs-12 col-md-4\">\n" +
    "                    <div ng-click=\"starWarsLookup.getSectionData(sections)\">\n" +
    "                        <h2 class=\"headerstyle\"><span ng-bind=\"sections.title\"></span> <i class=\"{{sections.icon}}\"></i></h2>\n" +
    "                        <p ng-bind=\"sections.desc\"></p>\n" +
    "                        <img ng-src=\"{{sections.thumbnail}}\" />\n" +
    "                    </div>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "        <div class=\"row\" ng-if=\"starWarsLookup.sectionLoaded\">\n" +
    "            <ul class=\"list-unstyled starWarsLookup--sub__nav\">\n" +
    "                <li ng-repeat=\"sections in starWarsLookup.sections\" class=\"col-md-2\">\n" +
    "                    <div ng-click=\"starWarsLookup.getSectionData(sections)\">\n" +
    "                        <button class=\"btn btn-primary\"><span ng-bind=\"sections.title\"></span> <i class=\"{{sections.icon}}\"></i></button>\n" +
    "                    </div>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "        <div class=\"clearfix\"></div>\n" +
    "        <div ng-if=\"starWarsLookup.sectionLoaded\" class=\"row starWarsLookup--main__content\">\n" +
    "            <!--<h2 ng-bind=\"starWarsLookup.sectionName\"></h2>-->\n" +
    "            <div class=\"pull-right\"></div>\n" +
    "            <ul class=\"list-unstyled\">\n" +
    "                <li ng-repeat=\"items in starWarsLookup.sectionData\" class=\"col-sm-4 col-md-4\">\n" +
    "                    <article class=\"container-fluid\">\n" +
    "                        <h3 ng-bind=\"items.name\"></h3>\n" +
    "                        <!--<div>\n" +
    "                            <img class=\"pull-right img-rounded\" ng-src=\"{{items.googleData.pagemap.cse_thumbnail[0].src}}\" />\n" +
    "                        </div>-->\n" +
    "                        <div ng-switch=\"starWarsLookup.sectionName\" class=\"item item-body\">\n" +
    "                            <div ng-switch-when=\"Planets\">\n" +
    "                                <div class=\"col-md-6\">\n" +
    "                                    <p><strong>Climate:</strong> <span ng-bind=\"items.climate\"></span></p>\n" +
    "                                    <p><strong>Diamter:</strong> <span ng-bind=\"items.diameter\"></span></p>\n" +
    "                                    <p><strong>Gravity:</strong> <span ng-bind=\"items.gravity\"></span></p>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-md-6\">\n" +
    "                                    <p><strong>Terrain:</strong> <span ng-bind=\"items.terrain\"></span></p>\n" +
    "                                    <p><strong>Rotation period:</strong> <span ng-bind=\"items.rotation_period\"></span></p>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-md-12\" ng-if=\"items.googleData.htmlSnippet\">\n" +
    "                                    <p ng-bind-html=\"items.googleData.htmlSnippet\"></p>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div ng-switch-when=\"People\">\n" +
    "                                <div class=\"col-md-6\">\n" +
    "                                    <p><strong>Height:</strong> <span ng-bind=\"items.height\"></span></p>\n" +
    "                                    <p><strong>Gender:</strong> <span ng-bind=\"items.gender\"></span></p>\n" +
    "                                    <p><strong>Birth year:</strong> <span ng-bind=\"items.birth_year\"></span></p>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-md-6\">\n" +
    "                                    <p><strong>Mass:</strong> <span ng-bind=\"items.mass\"></span></p>\n" +
    "                                    <p><strong>Hair color:</strong> <span ng-bind=\"items.hair_color\"></span></p>\n" +
    "                                    <p><strong>Skin color:</strong> <span ng-bind=\"items.skin_color\"></span></p>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-md-12\" ng-if=\"items.googleData.htmlSnippet\">\n" +
    "                                    <p ng-bind-html=\"items.googleData.htmlSnippet\"></p>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div ng-switch-when=\"Vehicles\">\n" +
    "                                <div class=\"col-md-6\">\n" +
    "                                    <p><strong>Crew:</strong> <span ng-bind=\"items.crew\"></span></p>\n" +
    "                                    <p><strong>Passengers:</strong> <span ng-bind=\"items.passengers\"></span></p>\n" +
    "                                    <p><strong>Model:</strong> <span ng-bind=\"items.model\"></span></p>\n" +
    "                                    <p><strong>Manufacturer:</strong> <span ng-bind=\"items.manufacturer\"></span></p>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-md-6\">\n" +
    "                                    <p><strong>Length:</strong> <span ng-bind=\"items.length\"></span></p>\n" +
    "                                    <p><strong>Cost:</strong> <span ng-bind=\"items.cost\"></span></p>\n" +
    "                                    <p><strong>Consumables:</strong> <span ng-bind=\"items.consumables\"></span></p>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-md-12\" ng-if=\"items.googleData.htmlSnippet\">\n" +
    "                                    <p ng-bind-html=\"items.googleData.htmlSnippet\"></p>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div ng-switch-when=\"Starships\">\n" +
    "                                <div class=\"col-md-6\">\n" +
    "                                    <p><strong>Crew:</strong> <span ng-bind=\"items.crew\"></span></p>\n" +
    "                                    <p><strong>Passengers:</strong> <span ng-bind=\"items.passengers\"></span></p>\n" +
    "                                    <p><strong>Model:</strong> <span ng-bind=\"items.model\"></span></p>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-md-6\">\n" +
    "                                    <p><strong>Manufacturer:</strong> <span ng-bind=\"items.manufacturer\"></span></p>\n" +
    "                                    <p><strong>Length:</strong> <span ng-bind=\"items.length\"></span></p>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-md-12\" ng-if=\"items.googleData.htmlSnippet\">\n" +
    "                                    <p ng-bind-html=\"items.googleData.htmlSnippet\"></p>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div ng-switch-when=\"Species\">\n" +
    "                                <p>C<strong>lassification:</strong> <span ng-bind=\"items.classification\"></span></p>\n" +
    "                                <p><strong>Designation:</strong> <span ng-bind=\"items.designation\"></span></p>\n" +
    "                                <p ng-if=\"items.language\"><strong>Language:</strong> <span ng-bind=\"items.language\"></span></p>\n" +
    "                                <!--<p ng-if=\"items.homeworld\"><strong>Homeworld:</strong> <span ng-bind=\"items.homeworld\"></span></p>-->\n" +
    "                                <p ng-if=\"items.average_height\"><strong>Average height:</strong> <span ng-bind=\"items.average_height\"></span></p>\n" +
    "                                <div class=\"col-md-12\" ng-if=\"items.googleData.htmlSnippet\">\n" +
    "                                    <p ng-bind-html=\"items.googleData.htmlSnippet\"></p>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div ng-switch-when=\"Films\">\n" +
    "                                <p>Episode: <span ng-bind=\"items.episode_id\"></span></p>\n" +
    "                                <p>Director: <span ng-bind=\"items.director\"></span></p>\n" +
    "                            </div>\n" +
    "                            <button class=\"btn btn-primary col-md-12\" ng-click=\"starWarsLookup.getFurtherInfo(items.name)\">More info <i class=\"fa fa-search\"></i></button>\n" +
    "                        </div>\n" +
    "                    </article>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </section>\n" +
    "</div>\n" +
    "");
}]);
