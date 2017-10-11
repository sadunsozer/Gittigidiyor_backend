
package dto;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "itemId",
    "sellerItemRevision",
    "title",
    "subtitle",
    "shortDescription",
    "price",
    "categoryPath",
    "condition",
    "conditionId",
    "itemLocation",
    "image",
    "additionalImages",
    "marketingPrice",
    "color",
    "brand",
    "itemEndDate",
    "seller",
    "estimatedAvailabilities",
    "shippingOptions",
    "shipToLocations",
    "returnTerms",
    "taxes",
    "localizedAspects",
    "topRatedBuyingExperience",
    "buyingOptions",
    "itemAffiliateWebUrl",
    "itemWebUrl",
    "description",
    "primaryItemGroup"
})
public class ItemDetailResult {

    @JsonProperty("itemId")
    private String itemId;
    @JsonProperty("sellerItemRevision")
    private String sellerItemRevision;
    @JsonProperty("title")
    private String title;
    @JsonProperty("subtitle")
    private String subtitle;
    @JsonProperty("shortDescription")
    private String shortDescription;
    @JsonProperty("price")
    private Price price;
    @JsonProperty("categoryPath")
    private String categoryPath;
    @JsonProperty("condition")
    private String condition;
    @JsonProperty("conditionId")
    private String conditionId;
    @JsonProperty("itemLocation")
    private ItemLocation itemLocation;
    @JsonProperty("image")
    private Image image;
    @JsonProperty("additionalImages")
    private List<AdditionalImage> additionalImages = null;
    @JsonProperty("marketingPrice")
    private MarketingPrice marketingPrice;
    @JsonProperty("color")
    private String color;
    @JsonProperty("brand")
    private String brand;
    @JsonProperty("itemEndDate")
    private String itemEndDate;
    @JsonProperty("seller")
    private Seller seller;
    @JsonProperty("estimatedAvailabilities")
    private List<EstimatedAvailability> estimatedAvailabilities = null;
    @JsonProperty("shippingOptions")
    private List<ShippingOption> shippingOptions = null;
    @JsonProperty("shipToLocations")
    private ShipToLocations shipToLocations;
    @JsonProperty("returnTerms")
    private ReturnTerms returnTerms;
    @JsonProperty("taxes")
    private List<Tax> taxes = null;
    @JsonProperty("localizedAspects")
    private List<LocalizedAspect> localizedAspects = null;
    @JsonProperty("topRatedBuyingExperience")
    private Boolean topRatedBuyingExperience;
    @JsonProperty("buyingOptions")
    private List<String> buyingOptions = null;
    @JsonProperty("itemAffiliateWebUrl")
    private String itemAffiliateWebUrl;
    @JsonProperty("itemWebUrl")
    private String itemWebUrl;
    @JsonProperty("description")
    private String description;
    @JsonProperty("primaryItemGroup")
    private PrimaryItemGroup primaryItemGroup;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new HashMap<String, Object>();

    @JsonProperty("itemId")
    public String getItemId() {
        return itemId;
    }

    @JsonProperty("itemId")
    public void setItemId(String itemId) {
        this.itemId = itemId;
    }

    @JsonProperty("sellerItemRevision")
    public String getSellerItemRevision() {
        return sellerItemRevision;
    }

    @JsonProperty("sellerItemRevision")
    public void setSellerItemRevision(String sellerItemRevision) {
        this.sellerItemRevision = sellerItemRevision;
    }

    @JsonProperty("title")
    public String getTitle() {
        return title;
    }

    @JsonProperty("title")
    public void setTitle(String title) {
        this.title = title;
    }

    @JsonProperty("subtitle")
    public String getSubtitle() {
        return subtitle;
    }

    @JsonProperty("subtitle")
    public void setSubtitle(String subtitle) {
        this.subtitle = subtitle;
    }

    @JsonProperty("shortDescription")
    public String getShortDescription() {
        return shortDescription;
    }

    @JsonProperty("shortDescription")
    public void setShortDescription(String shortDescription) {
        this.shortDescription = shortDescription;
    }

    @JsonProperty("price")
    public Price getPrice() {
        return price;
    }

    @JsonProperty("price")
    public void setPrice(Price price) {
        this.price = price;
    }

    @JsonProperty("categoryPath")
    public String getCategoryPath() {
        return categoryPath;
    }

    @JsonProperty("categoryPath")
    public void setCategoryPath(String categoryPath) {
        this.categoryPath = categoryPath;
    }

    @JsonProperty("condition")
    public String getCondition() {
        return condition;
    }

    @JsonProperty("condition")
    public void setCondition(String condition) {
        this.condition = condition;
    }

    @JsonProperty("conditionId")
    public String getConditionId() {
        return conditionId;
    }

    @JsonProperty("conditionId")
    public void setConditionId(String conditionId) {
        this.conditionId = conditionId;
    }

    @JsonProperty("itemLocation")
    public ItemLocation getItemLocation() {
        return itemLocation;
    }

    @JsonProperty("itemLocation")
    public void setItemLocation(ItemLocation itemLocation) {
        this.itemLocation = itemLocation;
    }

    @JsonProperty("image")
    public Image getImage() {
        return image;
    }

    @JsonProperty("image")
    public void setImage(Image image) {
        this.image = image;
    }

    @JsonProperty("additionalImages")
    public List<AdditionalImage> getAdditionalImages() {
        return additionalImages;
    }

    @JsonProperty("additionalImages")
    public void setAdditionalImages(List<AdditionalImage> additionalImages) {
        this.additionalImages = additionalImages;
    }

    @JsonProperty("marketingPrice")
    public MarketingPrice getMarketingPrice() {
        return marketingPrice;
    }

    @JsonProperty("marketingPrice")
    public void setMarketingPrice(MarketingPrice marketingPrice) {
        this.marketingPrice = marketingPrice;
    }

    @JsonProperty("color")
    public String getColor() {
        return color;
    }

    @JsonProperty("color")
    public void setColor(String color) {
        this.color = color;
    }

    @JsonProperty("brand")
    public String getBrand() {
        return brand;
    }

    @JsonProperty("brand")
    public void setBrand(String brand) {
        this.brand = brand;
    }

    @JsonProperty("itemEndDate")
    public String getItemEndDate() {
        return itemEndDate;
    }

    @JsonProperty("itemEndDate")
    public void setItemEndDate(String itemEndDate) {
        this.itemEndDate = itemEndDate;
    }

    @JsonProperty("seller")
    public Seller getSeller() {
        return seller;
    }

    @JsonProperty("seller")
    public void setSeller(Seller seller) {
        this.seller = seller;
    }

    @JsonProperty("estimatedAvailabilities")
    public List<EstimatedAvailability> getEstimatedAvailabilities() {
        return estimatedAvailabilities;
    }

    @JsonProperty("estimatedAvailabilities")
    public void setEstimatedAvailabilities(List<EstimatedAvailability> estimatedAvailabilities) {
        this.estimatedAvailabilities = estimatedAvailabilities;
    }

    @JsonProperty("shippingOptions")
    public List<ShippingOption> getShippingOptions() {
        return shippingOptions;
    }

    @JsonProperty("shippingOptions")
    public void setShippingOptions(List<ShippingOption> shippingOptions) {
        this.shippingOptions = shippingOptions;
    }

    @JsonProperty("shipToLocations")
    public ShipToLocations getShipToLocations() {
        return shipToLocations;
    }

    @JsonProperty("shipToLocations")
    public void setShipToLocations(ShipToLocations shipToLocations) {
        this.shipToLocations = shipToLocations;
    }

    @JsonProperty("returnTerms")
    public ReturnTerms getReturnTerms() {
        return returnTerms;
    }

    @JsonProperty("returnTerms")
    public void setReturnTerms(ReturnTerms returnTerms) {
        this.returnTerms = returnTerms;
    }

    @JsonProperty("taxes")
    public List<Tax> getTaxes() {
        return taxes;
    }

    @JsonProperty("taxes")
    public void setTaxes(List<Tax> taxes) {
        this.taxes = taxes;
    }

    @JsonProperty("localizedAspects")
    public List<LocalizedAspect> getLocalizedAspects() {
        return localizedAspects;
    }

    @JsonProperty("localizedAspects")
    public void setLocalizedAspects(List<LocalizedAspect> localizedAspects) {
        this.localizedAspects = localizedAspects;
    }

    @JsonProperty("topRatedBuyingExperience")
    public Boolean getTopRatedBuyingExperience() {
        return topRatedBuyingExperience;
    }

    @JsonProperty("topRatedBuyingExperience")
    public void setTopRatedBuyingExperience(Boolean topRatedBuyingExperience) {
        this.topRatedBuyingExperience = topRatedBuyingExperience;
    }

    @JsonProperty("buyingOptions")
    public List<String> getBuyingOptions() {
        return buyingOptions;
    }

    @JsonProperty("buyingOptions")
    public void setBuyingOptions(List<String> buyingOptions) {
        this.buyingOptions = buyingOptions;
    }

    @JsonProperty("itemAffiliateWebUrl")
    public String getItemAffiliateWebUrl() {
        return itemAffiliateWebUrl;
    }

    @JsonProperty("itemAffiliateWebUrl")
    public void setItemAffiliateWebUrl(String itemAffiliateWebUrl) {
        this.itemAffiliateWebUrl = itemAffiliateWebUrl;
    }

    @JsonProperty("itemWebUrl")
    public String getItemWebUrl() {
        return itemWebUrl;
    }

    @JsonProperty("itemWebUrl")
    public void setItemWebUrl(String itemWebUrl) {
        this.itemWebUrl = itemWebUrl;
    }

    @JsonProperty("description")
    public String getDescription() {
        return description;
    }

    @JsonProperty("description")
    public void setDescription(String description) {
        this.description = description;
    }

    @JsonProperty("primaryItemGroup")
    public PrimaryItemGroup getPrimaryItemGroup() {
        return primaryItemGroup;
    }

    @JsonProperty("primaryItemGroup")
    public void setPrimaryItemGroup(PrimaryItemGroup primaryItemGroup) {
        this.primaryItemGroup = primaryItemGroup;
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    @JsonAnySetter
    public void setAdditionalProperty(String name, Object value) {
        this.additionalProperties.put(name, value);
    }

}
