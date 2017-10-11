
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
    "title",
    "itemGroupHref",
    "image",
    "price",
    "itemGroupType",
    "itemHref",
    "seller",
    "condition",
    "conditionId",
    "shippingOptions",
    "buyingOptions",
    "currentBidPrice",
    "itemWebUrl",
    "itemLocation",
    "categories",
    "additionalImages"
})
public class ItemSummary {

    @JsonProperty("itemId")
    private String itemId;
    @JsonProperty("title")
    private String title;
    @JsonProperty("itemGroupHref")
    private String itemGroupHref;
    @JsonProperty("image")
    private Image image;
    @JsonProperty("price")
    private Price price;
    @JsonProperty("itemGroupType")
    private String itemGroupType;
    @JsonProperty("itemHref")
    private String itemHref;
    @JsonProperty("seller")
    private Seller seller;
    @JsonProperty("condition")
    private String condition;
    @JsonProperty("conditionId")
    private String conditionId;
    @JsonProperty("shippingOptions")
    private List<ShippingOption> shippingOptions = null;
    @JsonProperty("buyingOptions")
    private List<String> buyingOptions = null;
    @JsonProperty("currentBidPrice")
    private CurrentBidPrice currentBidPrice;
    @JsonProperty("itemWebUrl")
    private String itemWebUrl;
    @JsonProperty("itemLocation")
    private ItemLocation itemLocation;
    @JsonProperty("categories")
    private List<Category> categories = null;
    @JsonProperty("additionalImages")
    private List<AdditionalImage> additionalImages = null;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new HashMap<String, Object>();
    private String escapedItemId;

    @JsonProperty("itemId")
    public String getItemId() {
        return itemId;
    }

    @JsonProperty("itemId")
    public void setItemId(String itemId) {
        this.itemId = itemId;
    }

    @JsonProperty("title")
    public String getTitle() {
        return title;
    }

    @JsonProperty("title")
    public void setTitle(String title) {
        this.title = title;
    }

    @JsonProperty("itemGroupHref")
    public String getItemGroupHref() {
        return itemGroupHref;
    }

    @JsonProperty("itemGroupHref")
    public void setItemGroupHref(String itemGroupHref) {
        this.itemGroupHref = itemGroupHref;
    }

    @JsonProperty("image")
    public Image getImage() {
        return image;
    }

    @JsonProperty("image")
    public void setImage(Image image) {
        this.image = image;
    }

    @JsonProperty("price")
    public Price getPrice() {
        return price;
    }

    @JsonProperty("price")
    public void setPrice(Price price) {
        this.price = price;
    }

    @JsonProperty("itemGroupType")
    public String getItemGroupType() {
        return itemGroupType;
    }

    @JsonProperty("itemGroupType")
    public void setItemGroupType(String itemGroupType) {
        this.itemGroupType = itemGroupType;
    }

    @JsonProperty("itemHref")
    public String getItemHref() {
        return itemHref;
    }

    @JsonProperty("itemHref")
    public void setItemHref(String itemHref) {
        this.itemHref = itemHref;
    }

    @JsonProperty("seller")
    public Seller getSeller() {
        return seller;
    }

    @JsonProperty("seller")
    public void setSeller(Seller seller) {
        this.seller = seller;
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

    @JsonProperty("shippingOptions")
    public List<ShippingOption> getShippingOptions() {
        return shippingOptions;
    }

    @JsonProperty("shippingOptions")
    public void setShippingOptions(List<ShippingOption> shippingOptions) {
        this.shippingOptions = shippingOptions;
    }

    @JsonProperty("buyingOptions")
    public List<String> getBuyingOptions() {
        return buyingOptions;
    }

    @JsonProperty("buyingOptions")
    public void setBuyingOptions(List<String> buyingOptions) {
        this.buyingOptions = buyingOptions;
    }

    @JsonProperty("currentBidPrice")
    public CurrentBidPrice getCurrentBidPrice() {
        return currentBidPrice;
    }

    @JsonProperty("currentBidPrice")
    public void setCurrentBidPrice(CurrentBidPrice currentBidPrice) {
        this.currentBidPrice = currentBidPrice;
    }

    @JsonProperty("itemWebUrl")
    public String getItemWebUrl() {
        return itemWebUrl;
    }

    @JsonProperty("itemWebUrl")
    public void setItemWebUrl(String itemWebUrl) {
        this.itemWebUrl = itemWebUrl;
    }

    @JsonProperty("itemLocation")
    public ItemLocation getItemLocation() {
        return itemLocation;
    }

    @JsonProperty("itemLocation")
    public void setItemLocation(ItemLocation itemLocation) {
        this.itemLocation = itemLocation;
    }

    @JsonProperty("categories")
    public List<Category> getCategories() {
        return categories;
    }

    @JsonProperty("categories")
    public void setCategories(List<Category> categories) {
        this.categories = categories;
    }

    @JsonProperty("additionalImages")
    public List<AdditionalImage> getAdditionalImages() {
        return additionalImages;
    }

    @JsonProperty("additionalImages")
    public void setAdditionalImages(List<AdditionalImage> additionalImages) {
        this.additionalImages = additionalImages;
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    @JsonAnySetter
    public void setAdditionalProperty(String name, Object value) {
        this.additionalProperties.put(name, value);
    }

    public String getEscapedItemId() {
        if(this.itemId!=null){
            escapedItemId = itemId.replaceAll("\\|","%7C");
        }
        return escapedItemId;
    }

    public void setEscapedItemId(String escapedItemId) {
        this.escapedItemId = escapedItemId;
    }
}
