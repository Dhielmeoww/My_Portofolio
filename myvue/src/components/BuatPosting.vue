<template id="buat-postingan">
<div>
    <h1>Buat Postingan</h1>
    <form class="form-horizontal" action="">
        <div class="form-group">
            <label for="" class="col-sm-2 control-label">Judul</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" placeholder="Judul Artikel">
            </div>
        </div>
        <div class="form-group">
            <label for="" class="col-sm-2 control-label">Konten</label>
            <div class="col-sm-10">
            <textarea name="" id="" rows="5" class="form-control"></textarea>
            </div>
        </div>
        <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
                <button type="submit" class="btn btn-primary">Simpan</button>
            </div>
        </div>
    </form>
</div>
</template>

<script>
Vue.component('buat-postingan',{
    template: '#buat-postingan'
})
</script>