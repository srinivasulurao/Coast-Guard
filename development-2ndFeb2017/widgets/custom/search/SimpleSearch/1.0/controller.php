<?php
namespace Custom\Widgets\search;

class SimpleSearch extends \RightNow\Widgets\SimpleSearch {
    function __construct($attrs) {
        parent::__construct($attrs);
    }

    function getData() {

        return parent::getData();

    }

    /**
     * Overridable methods from SimpleSearch:
     */
    // protected function getUrlParameters($parameterString, array $filterData)
    // protected function getPlaceholderText(array $filterData)
    // protected function getDataFromFilter()
}