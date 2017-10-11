
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
    "itemGroupId",
    "itemGroupType",
    "itemGroupHref",
    "itemGroupTitle",
    "itemGroupImage",
    "itemGroupAdditionalImages"
})
public class PrimaryItemGroup {

    @JsonProperty("itemGroupId")
    private String itemGroupId;
    @JsonProperty("itemGroupType")
    private String itemGroupType;
    @JsonProperty("itemGroupHref")
    private String itemGroupHref;
    @JsonProperty("itemGroupTitle")
    private String itemGroupTitle;
    @JsonProperty("itemGroupImage")
    private ItemGroupImage itemGroupImage;
    @JsonProperty("itemGroupAdditionalImages")
    private List<ItemGroupAdditionalImage> itemGroupAdditionalImages = null;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new HashMap<String, Object>();

    @JsonProperty("itemGroupId")
    public String getItemGroupId() {
        return itemGroupId;
    }

    @JsonProperty("itemGroupId")
    public void setItemGroupId(String itemGroupId) {
        this.itemGroupId = itemGroupId;
    }

    @JsonProperty("itemGroupType")
    public String getItemGroupType() {
        return itemGroupType;
    }

    @JsonProperty("itemGroupType")
    public void setItemGroupType(String itemGroupType) {
        this.itemGroupType = itemGroupType;
    }

    @JsonProperty("itemGroupHref")
    public String getItemGroupHref() {
        return itemGroupHref;
    }

    @JsonProperty("itemGroupHref")
    public void setItemGroupHref(String itemGroupHref) {
        this.itemGroupHref = itemGroupHref;
    }

    @JsonProperty("itemGroupTitle")
    public String getItemGroupTitle() {
        return itemGroupTitle;
    }

    @JsonProperty("itemGroupTitle")
    public void setItemGroupTitle(String itemGroupTitle) {
        this.itemGroupTitle = itemGroupTitle;
    }

    @JsonProperty("itemGroupImage")
    public ItemGroupImage getItemGroupImage() {
        return itemGroupImage;
    }

    @JsonProperty("itemGroupImage")
    public void setItemGroupImage(ItemGroupImage itemGroupImage) {
        this.itemGroupImage = itemGroupImage;
    }

    @JsonProperty("itemGroupAdditionalImages")
    public List<ItemGroupAdditionalImage> getItemGroupAdditionalImages() {
        return itemGroupAdditionalImages;
    }

    @JsonProperty("itemGroupAdditionalImages")
    public void setItemGroupAdditionalImages(List<ItemGroupAdditionalImage> itemGroupAdditionalImages) {
        this.itemGroupAdditionalImages = itemGroupAdditionalImages;
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
