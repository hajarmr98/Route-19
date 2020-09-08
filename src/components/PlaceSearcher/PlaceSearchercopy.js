import Downshift from "downshift";
import FolderIcon from "material-ui-icons/Folder";
import Avatar from "material-ui/Avatar";
import IconButton from "material-ui/IconButton";
import List, { ListItem, ListItemText } from "material-ui/List";
import Paper from "material-ui/Paper";
import { createStyleSheet, withStyles } from "material-ui/styles";
import TextField from "material-ui/TextField";
import React, { Component, PropTypes } from "react";
import MdClear from "react-icons/lib/md/clear";
import MdExpandLess from "react-icons/lib/md/expand-less";
import MdExpandMore from "react-icons/lib/md/expand-more";

var styles = createStyleSheet("MaterialCombobox", function(theme) {
  const unit = theme.spacing.unit;
  const gutters = theme.mixins.gutters;
  const block = unit * 14;
  return {
    frame: {
      flexGrow: 1,
      minHeight: block,
      margin: 0,
      height: "100%"
    },
    listContainer: {
      maxHeight: 300,
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      width: "auto",
      marginRight: unit
    },
    active: {
      backgroundColor: theme.palette.action.active
    },
    secondaryActionFrame: {
      overflow: "visible",
      width: 2,
      height: 2,
      position: "absolute",
      right: 0,
      bottoptom: 0,
      zIndex: 1
    },
    secondaryAction: {
      marginLeft: -48
    },
    inputFrame: { position: "relative" },
    menuFrame: { position: "relative" },
    menuAnchor: {
      zIndex: 2,
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      overflow: "visible",
      height: 0
    }
  };
});

withStyles(styles)
class MaterialCombobox extends Component {
  updateInputValue = event => {
    const { onChangeInput } = this.props;
    if (onChangeInput) {
      onChangeInput(event);
    }
  };

  render() {
    const {
      items,
      displayTemplate,
      label,
      placeholder,
      searchTemplate,
      onChangeInput,
      inputDisplayTemplate,
      onStateChange,
      onChange,
      classes
    } = this.props;

    function autoCompleteContents(options) {
      const {
        clearSelection,
        getButtonProps,
        getInputProps,
        getItemProps,
        getLabelProps,
        getRootProps,
        highlightedIndex,
        inputValue,
        isOpen,
        openMenu,
        selectHighlightedItem,
        selectItem,
        selectItemAtIndex,
        selectedItem,
        setHighlightedIndex,
        toggleMenu
      } = options;

      console.log("options", options);

      function valuesBySearchTerm(item) {
        const _val = inputValue || "";

        if (!_val) {
          return true;
        }

        const searchThis = searchTemplate
          ? searchTemplate(item).toLowerCase()
          : item.toString();

        return searchThis.includes(_val.toLowerCase());
      }

      function autoCompleteItemToHtml(item, index) {
        let selected = false;

        if (selectedItem) {
          if (item.id && selectedItem.id) {
            selected = item.id === selectedItem.id;
          }
        }

        const _props = getItemProps({
          item,
          index,
          "data-highlighted": highlightedIndex === index,
          "data-selected": selected,
          onClick: () => {
            selectHighlightedItem()
          }
        });

        const _key = item.id || index;

        let stateColor = "rgba(0,0,0,0)";

        if (_props["data-highlighted"]) {
          stateColor = "rgba(0,0,0,0.12)";
        }

        if (_props["data-selected"]) {
          stateColor = "rgba(0,0,0,0.46)";
        }

        return displayTemplate
          ? displayTemplate(item, _props)
          : <ListItem
              {..._props}
              style={{
                backgroundColor: stateColor
              }}
            >
              <ListItemText primary={`${item}`} />
            </ListItem>;
      }

      const inputProps = { ...getInputProps({ a: 1 }) };
      const autoCompleteMenuItems = isOpen
        ? items
            .filter(valuesBySearchTerm.bind(this))
            .map(autoCompleteItemToHtml.bind(this))
        : [];

      const autoCompleteMenu = (
        <div className={classes.menuAnchor}>
          <List className={classes.listContainer}>
            {autoCompleteMenuItems}
          </List>
        </div>
      );

      let _value = inputValue || "";

      if (selectedItem && typeof selectedItem === "object") {
        _value = inputDisplayTemplate(selectedItem);
      }

      const _inputProps = getInputProps({
        placeholder: placeholder || "",
        value: _value,

        label: label || "",
        onChange: this.updateInputValue
      });

      let secondaryActionItem = isOpen ? <MdExpandLess /> : <MdExpandMore />;

      let secondaryActionEvent = toggleMenu;
      if (selectedItem) {
        secondaryActionItem = <MdClear />;
        secondaryActionEvent = () => {
          clearSelection();
        };
      }

      const secondaryAction = (
        <IconButton
          className={classes.secondaryAction}
          onClick={secondaryActionEvent}
        >
          {secondaryActionItem}
        </IconButton>
      );

      return (
        <div className={classes.frame}>
          <div className={classes.inputFrame}>
            <div className={classes.secondaryActionFrame}>
              {secondaryAction}
            </div>
            <TextField {..._inputProps} fullWidth />
          </div>
          <div className={classes.menuFrame}>
            {isOpen ? autoCompleteMenu : null}
          </div>
        </div>
      );
    }

    return (
      <Downshift
        {...this.props}
        //    itemToString={inputDisplayTemplate}
      >
        {autoCompleteContents.bind(this)}
      </Downshift>
    );
  }
}

export default MaterialCombobox