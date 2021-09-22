<template>
            <header>
                <div class="container-fluid">
                    <nav class="navbar navbar-expand-lg pb-0 pl-0 pr-0">
                        <a class="menu-toggle mr-3">
                            <img src="../assets/images/side-menu.svg" />
                        </a>
                        <a class="navbar-brand" href="index.html">
                            <img class="logo" src="../assets/images/logo.png" />
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
                            <i class="fas fa-search"></i>
                        </button>
                        <div class="collapse navbar-collapse justify-content-md-center main-nav-container" id="navbarsExample08">
                            <div class="input-group search-width">
                                <div class="form-group">
                                    <a class="form-control header-add-action" href="create-ticket.html">
                                        <img class="mr-1" src="../assets/images/plus.svg"> New Ticket
                                    </a>
                                </div>
                                <input type="text" class="form-control Search-input" id="search" placeholder="Search for a Ticket" />
                                <div class="input-group-append icon-border-bottom h-46 search-icon">
                                    <img src="../assets/images/search.svg" class="search" />
                                </div>
                            </div>
                        </div>
                        <form class="mt-md-0 right-header-actions">
                            <ul class="nav navbar-nav navbar-right float-right">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle p-0 position-relative notefications-link" href="#" id="navbardrop" data-toggle="dropdown">
                                        <i class="fas fa-bell"></i>
                                        <span class="badge notefications-icon">2</span>
                                    </a>
                                    <div class="dropdown-menu p-0 messages-list">
                                        <div class="messages-header">
                                            <div class="arrow-up"></div>
                                            Notifications
                                        </div>
                                        <a class="dropdown-item d-flex" href="#">
                                            <div class="mr-2">
                                                <i class="fas fa-envelope h6"></i>
                                            </div>
                                            <div class="flex-fill">
                                                <div class="message-title">Text goes here in this area</div>
                                                <div class="time">12 Des 2019</div>
                                            </div>
                                        </a>
                                        <a class="dropdown-item d-flex" href="#">
                                            <div class="mr-2">
                                                <i class="fas fa-envelope h6"></i>
                                            </div>
                                            <div class="flex-fill">
                                                <div class="message-title">Text goes here in this area</div>
                                                <div class="time">12 Des 2019</div>
                                            </div>
                                        </a>
                                        <a class="dropdown-item d-flex" href="#">
                                            <div class="mr-2">
                                                <i class="fas fa-envelope h6"></i>
                                            </div>
                                            <div class="flex-fill">
                                                <div class="message-title">Text goes here in this area</div>
                                                <div class="time">12 Des 2019</div>
                                            </div>
                                        </a>
                                        <div class="messages-footer">
                                            <a href="inbox.html">Show all</a>
                                        </div>
                                    </div>
                                </li>
                                <li class="nav-item dropdown pr-2 pl-3">
                                    <a class="nav-link dropdown-toggle p-0 position-relative notefications-link" href="#" id="navbardrop" data-toggle="dropdown">
                                        <i class="fas fa-user"></i>
                                        <span class="badge status-icon warning"><b>badge</b></span>
                                        <!--<span class="badge status-icon success"><b>badge</b></span>
                                        <span class="badge status-icon danger"><b>badge</b></span>-->
                                    </a>
                                    <div class="dropdown-menu p-0 messages-list user-status">
                                        <div class="messages-header">
                                            <div class="arrow-up"></div>
                                            User Status
                                        </div>
                                        <a class="dropdown-item d-flex" href="#">
                                            <div class="mr-2">
                                                <i class="fas fa-circle h6 success"></i>
                                            </div>
                                            <div class="flex-fill">
                                                <div class="message-title">Online</div>
                                            </div>
                                        </a>
                                        <a class="dropdown-item d-flex" href="#">
                                            <div class="mr-2">
                                                <i class="fas fa-circle h6 warning"></i>
                                            </div>
                                            <div class="flex-fill">
                                                <div class="message-title">Busy</div>
                                            </div>
                                        </a>
                                        <a class="dropdown-item d-flex" href="#">
                                            <div class="mr-2">
                                                <i class="fas fa-circle h6 danger"></i>
                                            </div>
                                            <div class="flex-fill">
                                                <div class="message-title">Offline</div>
                                            </div>
                                        </a>
                                    </div>
                                </li>
                                <li class="nav-item dropdown pr-2 pl-2 light-border-right">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img class="user-img mr-2" src="../assets/images/user.png" />
                                        <b>Mohammad Ali</b>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                        <a class="dropdown-item" href="#"><i class="fas fa-user mr-2"></i>Profile</a>
                                        <a class="dropdown-item" href="#"><i class="fas fa-cog mr-2"></i>Settings</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item text-danger" href="#"><i class="fas fa-sign-out-alt mr-2"></i>Logout</a>
                                    </div>
                                </li>


                                <li class="nav-item lang">
                                    <a class="nav-link p-0" href="#" id="navbardrop" data-toggle="dropdown">
                                        <i class="lang-icon float-right ml-1"></i>
                                        <span>عربي</span>
                                    </a>
                                </li>
                            </ul>
                        </form>
                    </nav>
                </div>
            </header>
</template>


