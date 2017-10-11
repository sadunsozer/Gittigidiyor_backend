
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
    "regionIncluded",
    "regionExcluded"
})
public class ShipToLocations {

    @JsonProperty("regionIncluded")
    private List<RegionIncluded> regionIncluded = null;
    @JsonProperty("regionExcluded")
    private List<RegionExcluded> regionExcluded = null;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new HashMap<String, Object>();

    @JsonProperty("regionIncluded")
    public List<RegionIncluded> getRegionIncluded() {
        return regionIncluded;
    }

    @JsonProperty("regionIncluded")
    public void setRegionIncluded(List<RegionIncluded> regionIncluded) {
        this.regionIncluded = regionIncluded;
    }

    @JsonProperty("regionExcluded")
    public List<RegionExcluded> getRegionExcluded() {
        return regionExcluded;
    }

    @JsonProperty("regionExcluded")
    public void setRegionExcluded(List<RegionExcluded> regionExcluded) {
        this.regionExcluded = regionExcluded;
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
