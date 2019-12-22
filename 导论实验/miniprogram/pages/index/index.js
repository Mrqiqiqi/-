Page({
  takePhoto: function () {
    let flash = this.data.flash == 'on' ? 'off' : 'on'
    this.setData({
      flash
    })
  }
})