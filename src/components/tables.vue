<template>
  <div class="container-fluid main">
    <div class="row mt-3">
      <div class="col-md-12 col-lg-3">
        <div class="row p-0">
          <div class="col-sm-12 col-md-12 col-lg-6 pl-3 pr-0">
            <a
              class="action-style"
              href="#"
              data-toggle="modal"
              data-target="#add-contacts"
            >
              <div class="single-st-card d-flex p-2">
                <div class="st-icon text-center mr-2 sm-icon">
                  <img src="../assets/images/add-ticket.svg" />
                </div>
                <div class="flex-grow-1 st-data">
                  <h5><small> Add group</small></h5>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="col-md-12 col-lg-9">
        <ul class="card-header-actions mt-3">
          <li class="float-right ml-2 sm-w-100">
            <div class="tabs-container">
              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#table"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                    ><i class="fas fa-table"></i
                  ></a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="profile-tab"
                    data-toggle="tab"
                    href="#list"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                    ><i class="fas fa-list"></i
                  ></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <img
                      class="refresh-icon"
                      src="../assets/images/refresh.svg"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="float-right ml-2 sm-w-100">
            <div class="input-group card-header-search">
              <input type="text" class="form-control" placeholder="Search" />
              <div class="input-group-append">
                <button class="btn" type="button">
                  <i class="fa fa-search"></i>
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="row mt-5" v-if="show">
      <div class="col-sm-12 col-md-12 col-lg-3 pl-3 p-0">
        <formdata
          :openEdit="openEdit"
          :addGroup="addGroup"
          @click="editedata"
        />
      </div>
    </div>

    <hr class="light-b-border custom-style" />
    <div class="row">
      <div class="col-sm-12">
        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="table"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <div class="row">
              <div class="col-sm-12 col-md-12">
                <div class="card content-card">
                  <div class="card-body p-2 min-vh-30">
                    <div class="grid">
                      <div
                        class="
                          table-section table-scroll
                          scrollLeg
                          lg
                          os-host
                          os-theme-dark
                          os-host-resize-disabled
                          os-host-scrollbar-horizontal-hidden
                          os-host-transition
                          os-host-overflow
                          os-host-overflow-y
                        "
                      >
                        <div class="os-resize-observer-host">
                          <div
                            class="os-resize-observer observed"
                            style="left: 0px; right: auto"
                          ></div>
                        </div>
                        <div
                          class="os-size-auto-observer"
                          style="height: calc(100% + 1px); float: left"
                        >
                          <div class="os-resize-observer observed"></div>
                        </div>
                        <div
                          class="os-content-glue"
                          style="margin: 0px; width: 1353px; height: 305px"
                        ></div>
                        <div class="os-padding">
                          <div
                            class="
                              os-viewport
                              os-viewport-native-scrollbars-invisible
                            "
                            style="overflow-y: scroll"
                          >
                            <div
                              class="os-content"
                              style="padding: 0px; height: 100%; width: 100%"
                            >
                              <table class="table mb-0">
                                <thead class="thead-light">
                                  <tr>
                                    <th
                                      width="20%"
                                      class="text-left position-relative"
                                    >
                                      group Name
                                      <div class="sort">
                                        <i class="sort-up"></i>
                                        <i class="sort-down"></i>
                                      </div>
                                    </th>
                                    <th
                                      width="15%"
                                      class="text-left position-relative"
                                    >
                                      code
                                      <div class="sort">
                                        <i class="sort-up"></i>
                                        <i class="sort-down"></i>
                                      </div>
                                    </th>

                                    <th
                                      width="10%"
                                      class="text-left position-relative"
                                    >
                                      Status
                                      <div class="sort">
                                        <i class="sort-up"></i>
                                        <i class="sort-down"></i>
                                      </div>
                                    </th>
                                    <th
                                      width="10%"
                                      class="text-left position-relative"
                                    >
                                      Created date
                                      <div class="sort">
                                        <i class="sort-up"></i>
                                        <i class="sort-down"></i>
                                      </div>
                                    </th>

                                    <th width="5%" class="text-left">
                                      Actions
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr v-for="list in lists" :key="list.id">
                                    <td class="text-left">
                                      <div class="overflow-text">
                                        {{ list.groupName }}
                                      </div>
                                    </td>
                                    <td class="text-left">
                                      <div>{{ list.code }}</div>
                                    </td>
                                    <td class="text-left">
                                      <div>
                                        {{ list.isActive }}
                                      </div>
                                    </td>
                                    <td class="text-left">
                                      <div>
                                        {{ DateTime(list.createdDate) }}
                                      </div>
                                    </td>
                                    <td class="text-left">
                                      <div
                                        class="
                                          dropdown
                                          d-inline-block
                                          single-card-actions
                                          mt-2
                                        "
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                      >
                                        <span class="actions-ddl">
                                          <i class="fas fa-ellipsis-h"></i>
                                        </span>
                                        <div
                                          class="dropdown-menu"
                                          aria-labelledby="dropdownMenuButton"
                                        >
                                          <!-- :to="{ name: 'edite', params: { id: list.id } }" -->

                                          <a
                                            class="dropdown-item edit-action"
                                            href="#"
                                            @click="openEdit(list.id)"
                                          >
                                            <img
                                              class="mr-1"
                                              src="../assets/images/edit.svg"
                                            />Edit
                                          </a>

                                          <a
                                            @click="deleteData(list.id)"
                                            class="dropdown-item reopen-action"
                                            href="#"
                                          >
                                            <img
                                              class="mr-1"
                                              src="../assets/images/close-icon.svg"
                                            />
                                            Remove
                                          </a>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--Modals-->
  <!--Add/Edit Contacts Left Side Modal-->
  <div
    class="modal fade side-dialog"
    id="add-contacts"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel4"
    aria-hidden="true"
  >
    <div
      class="modal-dialog modal-dialog-slideout modal-lg custom-width"
      role="document"
    >
      <div class="modal-content">
        <div class="modal-header p-3">
          <h4 class="modal-title">
            <i class="fas fa-pen mr-2"></i>Add/Edit Group
          </h4>
        </div>
        <div class="modal-body py-2 px-3">
          <!-- Form Section  -->
          <form @submit.prevent='sendData'>
            <div class="row mb-4">
              <div class="col-sm-12 col-md-12">
                <div class="form-group">
                  <label>
                    group Name
                    <span class="requiers-star"
                      ><i class="fas fa-star-of-life"></i
                    ></span>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    required
                    v-model="addGroup.groupName"
                     oninput="this.value = this.value.replace(/[^a-z 0-9]/gi, '').replace(/(\..*?)\..*/g, '$1');" 
                    
                  />
                </div>
              </div>

              <div class="col-sm-12 col-md-12">
                <div class="form-group">
                  <label>
                    Code
                    <span class="requiers-star"
                      ><i class="fas fa-star-of-life"></i
                    ></span>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="addGroup.code"
                    required
                    oninput="this.value = this.value.replace(/[^a-z 0-9]/gi, '').replace(/(\..*?)\..*/g, '$1');"  

                  />
                </div>
              </div>
            </div>

            <!-- Footer Section -->
            <div class="modal-footer p-2">
              <button
                data-dismiss="modal"
                aria-label="Close"
                type="button"
                class="btn icon-btn btn-secondary float-right ml-3 mb-2"
              >
                <img class="mr-1" src="../assets/images/rejected.svg" />
                Cancel
              </button>
              <!-- @click.prevent="sendData" -->
              <button
              class="btn success-btn icon-btn float-right mb-2"
              >
                <img class="mr-1" src="../assets/images/save-icon.svg" />
                Save
              </button>
            </div>
          </form>
          <div v-if="alert">
           <alert class=" alert alert-success">
            Done
          </alert>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script src="./tables.ts"></script>


