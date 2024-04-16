function ColumnHandler(/** @type {Array.<String>} */headers, canvasWidth) {
  var m_columnWidth = 0;

  this.getColumnName = function(index) {
    return headers[index];
  };

  this.getColumnIndex = function(name) {
    for (var i = 0; i != headers.length; ++i) {
      if (headers[i].toLowerCase() == name.toLowerCase()) {
        return i;
      }
    }
    return -1;
  };

  this.getColumnNumber = function() {
    return headers.length;
  };

  this.getColumnWidth = function() {
    if (m_columnWidth == 0) {
      var MIN_COL;
      if (canvasWidth < 1320) {
        MIN_COL = 5;
      } else if (canvasWidth < 1540) {
        MIN_COL = 6;
      } else if (canvasWidth < 1760) {
        MIN_COL = 7;
      } else {
        MIN_COL = 8;
      }
      var MIN_WIDTH = Math.floor(canvasWidth / MIN_COL);
      if (this.getColumnNumber() != 0) {
        m_columnWidth = Math.max(Math.floor(canvasWidth / this.getColumnNumber()), MIN_WIDTH);
      } else {
        m_columnWidth = MIN_WIDTH;
      }
    }
    return m_columnWidth;
  };
};