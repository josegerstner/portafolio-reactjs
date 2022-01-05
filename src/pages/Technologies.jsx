import { Component } from "react";

export class Technologies extends Component {
    render() {
        return(
            <div>
                <div class="d-flex flex-column bd-highlight mb-3">
                    <div class="p-2 bd-highlight">Frontend</div>
                    <div class="p-2 bd-highlight">
                        <div class="container">
                            <div class="row">
                                <div class="col-6 col-sm-4">
                                    HTML
                                </div>
                                <div class="col-6 col-sm-4">
                                    CSS
                                </div>
                                <div class="col-6 col-sm-4">
                                    JavaScript
                                </div>
                                <div class="col-6 col-sm-4">
                                    Bootstrap
                                </div>
                                <div class="col-6 col-sm-4">
                                    React JS
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="d-flex flex-column bd-highlight mb-3">
                    <div class="p-2 bd-highlight">Backend</div>
                    <div class="p-2 bd-highlight">
                        <div class="container">
                            <div class="row">
                                <div class="col-6 col-sm-4">
                                    JAVA
                                </div>
                                <div class="col-6 col-sm-4">
                                    Node JS
                                </div>
                                <div class="col-6 col-sm-4">
                                    PHP
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="d-flex flex-column bd-highlight mb-3">
                    <div class="p-2 bd-highlight">Databases</div>
                    <div class="p-2 bd-highlight">
                        <div class="container">
                            <div class="row">
                                <div class="col-6 col-sm-4">
                                    MySQL
                                </div>
                                <div class="col-6 col-sm-4">
                                    MongoDB
                                </div>
                                <div class="col-6 col-sm-4">
                                    MSSQL
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="d-flex flex-column bd-highlight mb-3">
                    <div class="p-2 bd-highlight">Others</div>
                    <div class="p-2 bd-highlight">
                        <div class="container">
                            <div class="row">
                                <div class="col-6 col-sm-4">
                                    Git
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}