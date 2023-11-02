import PropTypes from "prop-types";

export function Filtered({handleFilterChange, filters, setFilters}) {

    return (<div className='view'>
            <button className={`view_btn ${filters === 'all' ? 'view_current' : ''}`}
                    onClick={() => {
                        setFilters('all');
                        handleFilterChange('all');
                    }}>
                All
            </button>
            <button className={`view_btn ${filters === 'active' ? 'view_current' : ''}`}
                    onClick={() => {
                        setFilters('active');
                        handleFilterChange('active');
                    }}>
                Active
            </button>
            <button className={`view_btn ${filters === 'done' ? 'view_current' : ''}`}
                    onClick={() => {
                        setFilters('done');
                        handleFilterChange('done');
                    }}>
                Done
            </button>
        </div>
    )
}

Filtered.propTypes = {
    handleFilterChange: PropTypes.func.isRequired,
    filters: PropTypes.string.isRequired,
    setFilters: PropTypes.func.isRequired,
}