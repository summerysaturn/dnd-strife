<script>
  export let name;
  import { json } from "./app.js";
</script>

<style type="text/scss">
  @import "./main.scss";
</style>

<main>
  <header class="mb-4">
    <div class="container">
      <div class="d-md-flex">
        <div class="flex-grow-1">
          <img class="title-graphic" src="preview.png" />
        </div>

        <div>
          <button disabled class="btn btn-outline-dark w-100 m-1">
            Upload
          </button>
          <button disabled class="btn btn-outline-dark w-100 m-1">
            Download
          </button>
          <p>
            <small class="text-muted">(Disabled, awaiting feature updates)</small>
          </p>
        </div>
      </div>
    </div>
  </header>

  <div class="container">
    <h1>Character Info</h1>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 mb-3">
      <div class="col mb-3">
        <div class="card">
          <div class="card-body">
            <p>Card</p>
          </div>
        </div>
      </div>
      <div class="col mb-3">
        <div class="card">
          <div class="card-body">
            <p>Card</p>
          </div>
        </div>
      </div>
      <div class="col mb-3">
        <div class="card">
          <div class="card-body">
            <p>Card</p>
          </div>
        </div>
      </div>
    </div>

    <h1>Stats</h1>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 mb-3">
      <div class="col mb-3">
        <div class="card">
          <div class="card-body">
            <p>Card</p>
          </div>
        </div>
      </div>
      <div class="col mb-3">
        <div class="card">
          <div class="card-body">
            <p>Card</p>
          </div>
        </div>
      </div>
      <div class="col mb-3">
        <div class="card">
          <div class="card-body">
            <p>Card</p>
          </div>
        </div>
      </div>
    </div>

    <h1>Attacks</h1>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 mb-3">
      <div class="col mb-3">
        <div class="card">
          <div class="card-body">
            <p>Card</p>
          </div>
        </div>
      </div>
      <div class="col mb-3">
        <div class="card">
          <div class="card-body">
            <p>Card</p>
          </div>
        </div>
      </div>
      <div class="col mb-3">
        <div class="card">
          <div class="card-body">
            <p>Card</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
