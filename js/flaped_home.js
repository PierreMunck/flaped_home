jQuery.fn.flapnode = function () {
    this.each(function(e) {
        jQuery(this).children('.node-flaper').flapdiv();
    });
};

jQuery.fn.flapdiv = function () {
    this.each(function(e) {
        var flaper = jQuery(this);
        
        // FRONT
        var datafront = flaper.attr('data-flap-front');
        var frontElement = [];
        if(undefined != datafront){
            frontElement = datafront.split(" ");
        }
        var appendContentFront = "";
        var heightfront = 0;
        for (index = 0; index < frontElement.length; ++index) {
            var className = frontElement[index];
            if(className != ""){
                heightfront += flaper.find(className).height();
                appendContentFront += flaper.find(className).flapcontent();
            }
        }
        
        // BACK
        
        if(undefined != flaper.attr('data-flap-back')){
            var backElement = flaper.attr('data-flap-back').split(" ");
        }
        var databack = flaper.attr('data-flap-back');
        var backElement = [];
        if(undefined != databack){
            var backElement = databack.split(" ");
        }
        var appendContentback = "";
        var heightback = 0;
        for (index = 0; index < backElement.length; ++index) {
            var className = backElement[index];
            if(className != ""){
                heightback += flaper.find(className).height();
                appendContentback += flaper.find(className).flapcontent();
            }
        }
        
        flaper.html("");
        flaper.append( '<div class="front">'+appendContentFront+'</div>' );
        flaper.append( '<div class="back">'+appendContentback+'</div>' );
        flaper.css( 'height',heightfront+"px" );
        if(heightfront < heightback){
            flaper.css( 'height',heightback+"px" );
        }
        
        
    });
};

jQuery.fn.flapcontent = function () {
    var content = jQuery(this);
    var retour = "<div ";
    retour += " class=\""+content.attr("class")+"\" ";
    retour += " property=\""+content.attr("property")+"\" ";
    retour += " datatype=\""+content.attr("datatype")+"\" ";
    retour += " id=\""+content.attr("id")+"\" ";
    retour += " >";
    retour += content.html();
    retour += "</div>";
    return retour;
};

jQuery(document).ready(function(){
    jQuery('.node').flapnode();
});