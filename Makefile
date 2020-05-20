IMG_DIR := public/images

INPUTS := $(wildcard $(IMG_DIR)/*.png)
OUTPUTS := $(patsubst $(IMG_DIR)/%.png,$(IMG_DIR)/%.webp,$(INPUTS))

main: $(OUTPUTS)

$(IMG_DIR)/%.webp: $(IMG_DIR)/%.png
	echo "cwebp -q 75 $< -o $@"